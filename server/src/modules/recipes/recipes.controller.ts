import { Controller } from '@nestjs/common';
import { Get, UseGuards } from '@nestjs/common';

import { Recipe } from 'src/types';

import { JwtAuthGuard } from '../auth';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Recipe[]> {
    return this.recipesService.getRecipes();
  }
}
