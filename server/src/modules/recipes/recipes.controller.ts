import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Query, Request, UseGuards } from '@nestjs/common';

import { UserJwtPayload } from '@modules/users';
import { PaginatedResponse, QueryParamsOptions, Recipe } from '@types';

import { JwtAuthGuard } from '../auth';
import { CreateUserRecipeLikeDto } from './dtos';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(
    @Request()
    req: UserJwtPayload,
    @Query() options?: QueryParamsOptions,
  ): Promise<PaginatedResponse<Recipe[]>> {
    return this.recipesService.getRecipes(req.user.id, options);
  }

  @Post('/liked')
  @UseGuards(JwtAuthGuard)
  async addRecipeToUserLiked(
    @Request()
    req: UserJwtPayload,
    @Body() { recipeId }: Pick<CreateUserRecipeLikeDto, 'recipeId'>,
  ) {
    await this.recipesService.addRecipeToUserLiked({ userId: req.user.id, recipeId });
  }

  @Delete('/liked/:recipeId')
  @UseGuards(JwtAuthGuard)
  async deleteRecipeFromUserLiked(
    @Request()
    req: UserJwtPayload,
    @Param('recipeId', ParseUUIDPipe) recipeId,
  ) {
    await this.recipesService.deleteLikedRecipe({ userId: req.user.id, recipeId });
  }
}
