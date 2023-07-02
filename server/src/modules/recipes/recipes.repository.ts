import { Injectable } from '@nestjs/common';

import { LikedRecipe, PaginationOptions, Recipe } from '@types';
import { Pagination } from '@utils/pagination';
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

  async getRecipes(userId: string, { page = 1, limit = 50 }: PaginationOptions): Promise<Pagination<Recipe[]>> {
    const offset = (page - 1) * limit;

    const [foundRecipes, totalCount] = await Promise.all([
      this.recipes()
        .select(['recipes.id', 'name', 'imgUrl', 'ratingValue', 'reviewsNumber', 'time', 'description'])
        .count('likedRecipes.id', { as: 'isLiked' })
        .from('recipes')
        .leftJoin('likedRecipes', function () {
          this.on('recipes.id', '=', 'likedRecipes.recipeId').onIn('likedRecipes.userId', [userId]);
        })
        .where('recipes.deletedAt', null)
        .groupBy('recipes.id')
        .offset(offset)
        .limit(limit),
      this.recipes().count('id', { as: 'total' }).where('deletedAt', null),
    ]);
    const mappedRecipes = foundRecipes.map((recipe) => ({ ...recipe, isLiked: recipe.isLiked > 0 }));
    const pages = totalCount[0].total / limit;

    const pagination = {
      total: Number(totalCount[0].total),
      pages,
      page,
      limit,
    };

    return { items: mappedRecipes, pagination };
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
