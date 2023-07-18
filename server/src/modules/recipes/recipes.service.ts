import { Injectable } from '@nestjs/common';

import { PaginatedResponse, QueryParamsOptions, Recipe } from '@types';
import { parseQueryParamsOptions } from '@utils/parseQueryParamsOptions';

import { CreateUserRecipeLikeDto, DeleteLikedRecipeDto } from './dtos';
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

  async addRecipeToUserLiked(createdUserRecipeLikeDto: CreateUserRecipeLikeDto) {
    await this.recipesRepo.createUserRecipeLike(createdUserRecipeLikeDto);
  }

  async deleteLikedRecipe(deleteLikedRecipeDto: DeleteLikedRecipeDto) {
    await this.recipesRepo.deleteLikedRecipe(deleteLikedRecipeDto);
  }
}
