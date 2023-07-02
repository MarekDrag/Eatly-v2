import { Injectable } from '@nestjs/common';

import { PaginationOptions, Recipe } from '@types';
import { Pagination } from '@utils/pagination';

import { CreateUserRecipeLikeDto, DeleteLikedRecipeDto } from './dtos';
import { RecipesRepository } from './recipes.repository';

@Injectable()
export class RecipesService {
  constructor(private recipesRepo: RecipesRepository) {}

  async getRecipes(userId: string, options: PaginationOptions): Promise<Pagination<Recipe[]>> {
    return this.recipesRepo.getRecipes(userId, options);
  }

  async addRecipeToUserLiked(createdUserRecipeLikeDto: CreateUserRecipeLikeDto) {
    await this.recipesRepo.createUserRecipeLike(createdUserRecipeLikeDto);
  }

  async deleteLikedRecipe(deleteLikedRecipeDto: DeleteLikedRecipeDto) {
    await this.recipesRepo.deleteLikedRecipe(deleteLikedRecipeDto);
  }
}
