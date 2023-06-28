import { Injectable } from '@nestjs/common';

import { RecipeDto } from './dtos/recipe.dto';
import { RecipesRepository } from './recipes.repository';

@Injectable()
export class RecipesService {
  constructor(private recipesRepo: RecipesRepository) {}

  async getRecipes(): Promise<RecipeDto[]> {
    return this.recipesRepo.getRecipes();
  }
}
