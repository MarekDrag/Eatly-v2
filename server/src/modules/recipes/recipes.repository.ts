import { Injectable, NotFoundException } from '@nestjs/common';

import { Knex } from 'knex';
import { InjectKnex, Knex as KnexModule } from 'nestjs-knex';
import { Recipe } from 'src/types';

@Injectable()
export class RecipesRepository {
  private recipes: () => Knex.QueryBuilder<Recipe>;

  constructor(@InjectKnex() knex: KnexModule) {
    this.recipes = () => knex<Recipe>('recipes');
  }

  async getRecipes(): Promise<Recipe[]> {
    const foundRecipes = await this.recipes().select(['id', 'lastName', 'firstName', 'username', 'email', 'createdAt']);

    if (foundRecipes.length == 0) {
      throw new NotFoundException('recipes not found');
    }

    return foundRecipes;
  }
}
