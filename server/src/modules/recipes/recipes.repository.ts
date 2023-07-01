import { Injectable } from '@nestjs/common';

import { PaginationOptions, Recipe } from '@types';
import { Pagination } from '@utils/pagination';
import { Knex } from 'knex';
import { InjectKnex, Knex as KnexModule } from 'nestjs-knex';

@Injectable()
export class RecipesRepository {
  private recipes: () => Knex.QueryBuilder<Recipe>;

  constructor(@InjectKnex() knex: KnexModule) {
    this.recipes = () => knex<Recipe>('recipes');
  }

  async getRecipes({ page = 1, limit = 50 }: PaginationOptions): Promise<Pagination<Recipe[]>> {
    const offset = (page - 1) * limit;

    const [foundRecipes, totalCount] = await Promise.all([
      this.recipes()
        .select(['id', 'name', 'imgUrl', 'ratingValue', 'reviewsNumber', 'time', 'description'])
        .where('deletedAt', null)
        .offset(offset)
        .limit(limit),
      this.recipes().count('id', { as: 'total' }).where('deletedAt', null),
    ]);

    const pages = totalCount[0].total / limit;

    const pagination = {
      total: Number(totalCount[0].total),
      pages,
      page,
      limit,
    };

    return { items: foundRecipes, pagination };
  }
}
