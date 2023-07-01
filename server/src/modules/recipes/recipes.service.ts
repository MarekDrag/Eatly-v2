import { Injectable } from '@nestjs/common';

import { PaginationOptions, Recipe } from '@types';
import { Pagination } from '@utils/pagination';

import { RecipesRepository } from './recipes.repository';

@Injectable()
export class RecipesService {
  constructor(private recipesRepo: RecipesRepository) {}

  async getRecipes(options: PaginationOptions): Promise<Pagination<Recipe[]>> {
    return this.recipesRepo.getRecipes(options);
  }
}
