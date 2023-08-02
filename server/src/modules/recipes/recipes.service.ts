import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PaginatedResponse, QueryParamsOptions, Recipe } from '@types';
import { parseQueryParamsOptions } from '@utils/parseQueryParamsOptions';

import { CreateUserRecipeLikeDto, DeleteLikedRecipeDto, DeleteUserRecipeDto, UpdateRecipeDto } from './dtos';
import { RecipesRepository } from './recipes.repository';

@Injectable()
export class RecipesService {
  constructor(private recipesRepo: RecipesRepository) {}

  async getRecipes(userId: string, options: QueryParamsOptions): Promise<PaginatedResponse<Recipe[]>> {
    const filtersKeys = ['type', 'meal'];
    const parsedOptions = parseQueryParamsOptions(options, filtersKeys);
    return this.recipesRepo.getRecipes(userId, parsedOptions);
  }

  async getUserRecipes(userId: string, options: QueryParamsOptions): Promise<PaginatedResponse<Recipe[]>> {
    const filtersKeys = ['type', 'meal'];
    const parsedOptions = parseQueryParamsOptions(options, filtersKeys);
    return this.recipesRepo.getUserRecipes(userId, parsedOptions);
  }

  async patchRecipe(userId: string, recipeId: string, updateRecipeDto: UpdateRecipeDto) {
    const recipeStatus = await this.recipesRepo.getRecipeStatus(userId, recipeId);

    if (recipeStatus === 'public') {
      throw new HttpException('You cannot update recipe when status is set to public', HttpStatus.FORBIDDEN);
    }

    await this.recipesRepo.patchRecipe(userId, recipeId, updateRecipeDto);
  }

  async deleteUserRecipe(deleteUserRecipeDto: DeleteUserRecipeDto) {
    await this.recipesRepo.deleteUserRecipe(deleteUserRecipeDto);
  }

  async addRecipeToUserLiked(createdUserRecipeLikeDto: CreateUserRecipeLikeDto) {
    await this.recipesRepo.createUserRecipeLike(createdUserRecipeLikeDto);
  }

  async deleteLikedRecipe(deleteLikedRecipeDto: DeleteLikedRecipeDto) {
    await this.recipesRepo.deleteLikedRecipe(deleteLikedRecipeDto);
  }
}
