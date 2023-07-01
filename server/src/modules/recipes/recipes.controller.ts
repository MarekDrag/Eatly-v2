import { Controller, Query } from '@nestjs/common';
import { Get, UseGuards } from '@nestjs/common';

import { PaginationOptions, Recipe } from '@types';
import { Pagination } from '@utils/pagination';

import { JwtAuthGuard } from '../auth';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Query() options: PaginationOptions): Promise<Pagination<Recipe[]>> {
    return this.recipesService.getRecipes(options);
  }
}
