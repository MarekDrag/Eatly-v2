import { Injectable, NotFoundException } from '@nestjs/common';

import { DEFAULT_PAGINATION } from '@config/constants';
import { LikedRecipe, Options, PaginatedResponse, Recipe, RecipeComment, RecipeIngredient } from '@types';
import { resolvePaginatedItems } from '@utils/resolvePaginatedItems';
import { Knex } from 'knex';
import { InjectKnex, Knex as KnexModule } from 'nestjs-knex';

import { CreateUserRecipeLikeDto, DeleteLikedRecipeDto, DeleteUserRecipeDto, RecipeDto, UpdateRecipeDto } from './dtos';

@Injectable()
export class RecipesRepository {
  private recipes: () => Knex.QueryBuilder<Recipe>;
  private likedRecipes: () => Knex.QueryBuilder<LikedRecipe>;
  private recipesIngredients: () => Knex.QueryBuilder<RecipeIngredient>;
  private recipesComments: () => Knex.QueryBuilder<RecipeComment>;

  constructor(@InjectKnex() knex: KnexModule) {
    this.recipes = () => knex<Recipe>('recipes');
    this.likedRecipes = () => knex<LikedRecipe>('likedRecipes');
    this.recipesIngredients = () => knex<RecipeIngredient>('recipesIngredients');
    this.recipesComments = () => knex<RecipeComment>('recipesComments');
  }

  async getRecipe(recipeId): Promise<RecipeDto> {
    const recipe = await this.recipes().where('id', recipeId).first();

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${recipeId} not found.`);
    }

    const ingredients = await this.recipesIngredients()
      .select('ingredients.id', 'ingredients.measure', 'ingredients.name', 'amount')
      .where('recipe_id', recipeId)
      .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id');
    const recipeComments = await this.recipesComments()
      .select(
        'recipes_comments.likes',
        'recipes_comments.content',
        'recipes_comments.createdAt',
        'users.firstName',
        'users.lastName',
        'users.imgUrl',
      )
      .join('users', 'recipes_comments.user_id', 'users.id')
      .where('recipe_id', recipeId);
    const comments = recipeComments.map(({ firstName, lastName, imgUrl, ...comment }) => ({
      author: `${firstName} ${lastName}`,
      authorAvatar: imgUrl,
      ...comment,
    }));

    const recipeDTO: RecipeDto = {
      ...recipe,
      ingredients,
      comments,
    };

    return recipeDTO;
  }

  async getRecipes(userId: string, options: Options): Promise<PaginatedResponse<Recipe[]>> {
    const limit = DEFAULT_PAGINATION.limit;
    const offset = options.page > 0 ? (options.page - 1) * limit : limit;

    const queryAllRecipes = this.recipes()
      .select(['recipes.id', 'name', 'imgUrl', 'ratingValue', 'reviewsNumber', 'cookingTime', 'description'])
      .count('likedRecipes.id', { as: 'isLiked' })
      .from('recipes')
      .leftJoin('likedRecipes', function () {
        this.on('recipes.id', '=', 'likedRecipes.recipeId').onIn('likedRecipes.userId', [userId]);
      })
      .where('recipes.deletedAt', null)
      .andWhere('recipes.status', 'public')
      .groupBy('recipes.id');
    const queryAllRecipesTotal = this.recipes()
      .count('id', { as: 'total' })
      .where('deletedAt', null)
      .andWhere('recipes.status', 'public');

    if (options.search) {
      queryAllRecipes.andWhereILike('name', `%${options.search}%`);
      queryAllRecipesTotal.andWhereILike('name', `%${options.search}%`);
    }

    if (options.filters) {
      for (const key in options.filters) {
        queryAllRecipes.whereIn(key, options.filters[key]);
        queryAllRecipesTotal.whereIn(key, options.filters[key]);
      }
    }

    const [foundRecipes, totalCount] = await Promise.all([
      queryAllRecipes.offset(offset).limit(limit),
      queryAllRecipesTotal,
    ]);
    const mappedRecipes = foundRecipes.map((recipe) => ({ ...recipe, isLiked: recipe.isLiked > 0 }));

    return resolvePaginatedItems({ items: mappedRecipes, options, totalCount, limit });
  }

  async getUserRecipes(userId: string, options: Options): Promise<PaginatedResponse<Recipe[]>> {
    const limit = DEFAULT_PAGINATION.limit;
    const offset = options.page > 0 ? (options.page - 1) * limit : limit;

    const queryAllRecipes = this.recipes()
      .select([
        'id',
        'name',
        'imgUrl',
        'ratingValue',
        'reviewsNumber',
        'cookingTime',
        'description',
        'status',
        'createdAt',
      ])
      .where('deletedAt', null)
      .andWhere('creatorId', userId)
      .orderBy('createdAt');
    const queryAllRecipesTotal = this.recipes()
      .count('id', { as: 'total' })
      .where('deletedAt', null)
      .andWhere('creatorId', userId);

    if (options.search) {
      queryAllRecipes.andWhereILike('name', `%${options.search}%`);
      queryAllRecipesTotal.andWhereILike('name', `%${options.search}%`);
    }

    if (options.filters) {
      for (const key in options.filters) {
        queryAllRecipes.whereIn(key, options.filters[key]);
        queryAllRecipesTotal.whereIn(key, options.filters[key]);
      }
    }

    const [foundRecipes, totalCount] = await Promise.all([
      queryAllRecipes.offset(offset).limit(limit),
      queryAllRecipesTotal,
    ]);

    return resolvePaginatedItems({ items: foundRecipes, options, totalCount, limit });
  }

  async getRecipeStatus(userId: string, recipeId: string): Promise<'public' | 'private'> {
    return this.recipes().select('status').where('creatorId', userId).andWhere('id', recipeId);
  }

  async patchRecipe(userId: string, recipeId: string, updateRecipeDto: UpdateRecipeDto) {
    await this.recipes().where('creatorId', userId).andWhere('id', recipeId).update(updateRecipeDto);
  }

  async deleteUserRecipe({ userId, recipeId }: DeleteUserRecipeDto) {
    await this.recipes()
      .where('creatorId', userId)
      .andWhere('id', recipeId)
      .update('deletedAt', new Date().toISOString());
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
