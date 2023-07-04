import { Injectable } from '@nestjs/common';

import { PaginatedResponse, QueryParamsOptions, Recipe } from '@types';

import { CreateUserRecipeLikeDto, DeleteLikedRecipeDto } from './dtos';
import { RecipesRepository } from './recipes.repository';

@Injectable()
export class RecipesService {
  constructor(private recipesRepo: RecipesRepository) {}

  async getRecipes(userId: string, options: QueryParamsOptions): Promise<PaginatedResponse<Recipe[]>> {
    return this.recipesRepo.getRecipes(userId, {
      ...options,
      pagination: { page: Number(options.page), limit: Number(options.limit) },
    });
  }

  async addRecipeToUserLiked(createdUserRecipeLikeDto: CreateUserRecipeLikeDto) {
    await this.recipesRepo.createUserRecipeLike(createdUserRecipeLikeDto);
  }

  async deleteLikedRecipe(deleteLikedRecipeDto: DeleteLikedRecipeDto) {
    await this.recipesRepo.deleteLikedRecipe(deleteLikedRecipeDto);
  }
}
