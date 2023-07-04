import { Injectable } from '@nestjs/common';

import { LikedRecipe, Options, PaginatedResponse, Recipe } from '@types';
import { Knex } from 'knex';
import { InjectKnex, Knex as KnexModule } from 'nestjs-knex';

import { CreateUserRecipeLikeDto, DeleteLikedRecipeDto } from './dtos';

@Injectable()
export class RecipesRepository {
  private recipes: () => Knex.QueryBuilder<Recipe>;
  private likedRecipes: () => Knex.QueryBuilder<LikedRecipe>;

  constructor(@InjectKnex() knex: KnexModule) {
    this.recipes = () => knex<Recipe>('recipes');
    this.likedRecipes = () => knex<LikedRecipe>('likedRecipes');
  }

  async getRecipes(userId: string, { pagination, search }: Options): Promise<PaginatedResponse<Recipe[]>> {
    const { limit = 50, page = 1 } = pagination;
    const offset = page > 0 ? (page - 1) * limit : 50;

    const queryAllRecipes = this.recipes()
      .select(['recipes.id', 'name', 'imgUrl', 'ratingValue', 'reviewsNumber', 'time', 'description'])
      .count('likedRecipes.id', { as: 'isLiked' })
      .from('recipes')
      .leftJoin('likedRecipes', function () {
        this.on('recipes.id', '=', 'likedRecipes.recipeId').onIn('likedRecipes.userId', [userId]);
      })
      .where('recipes.deletedAt', null)
      .groupBy('recipes.id');
    const queryAllRecipesTotal = this.recipes().count('id', { as: 'total' }).where('deletedAt', null);

    if (search) {
      queryAllRecipes.andWhereILike('name', `%${search}%`);
      queryAllRecipesTotal.andWhereILike('name', `%${search}%`);
    }

    const [foundRecipes, totalCount] = await Promise.all([
      queryAllRecipes.offset(offset).limit(limit),
      queryAllRecipesTotal,
    ]);
    const mappedRecipes = foundRecipes.map((recipe) => ({ ...recipe, isLiked: recipe.isLiked > 0 }));

    return {
      items: mappedRecipes,
      pagination: {
        total: Number(totalCount[0].total),
        pages: Math.ceil(totalCount[0].total / limit),
        page: search ? 1 : page,
        limit,
      },
    };
  }

  async createUserRecipeLike(createUserRecipeLikeDto: CreateUserRecipeLikeDto) {
    await this.likedRecipes().insert(createUserRecipeLikeDto);
  }

  async deleteLikedRecipe(deleteLikedRecipeDto: DeleteLikedRecipeDto) {
    await this.likedRecipes()
      .where('userId', deleteLikedRecipeDto.userId)
      .andWhere('recipeId', deleteLikedRecipeDto.recipeId)
      .delete();
  }
}
