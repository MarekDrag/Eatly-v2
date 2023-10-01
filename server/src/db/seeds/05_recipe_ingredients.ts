import { faker } from '@faker-js/faker';
import { RecipeIngredient } from '@types';
import { Knex } from 'knex';

import { RecipeIds } from './02_recipes';
import { IngredientsIds } from './04_ingredients';

const generateRecipeIngredients = (): RecipeIngredient => {
  return {
    id: faker.string.uuid(),
    amount: faker.number.int({ min: 1, max: 200 }),
    recipeId: faker.helpers.arrayElement(RecipeIds),
    ingredientId: faker.helpers.arrayElement(IngredientsIds),
  };
};

const generateRecipeIngredientsArray = () => {
  return Array.from({ length: 500 }, generateRecipeIngredients);
};

const RecipeIngredientsArray = generateRecipeIngredientsArray();

export async function seed(knex: Knex): Promise<void> {
  await knex('recipe_ingredients').insert(RecipeIngredientsArray).onConflict(['id']).merge();
}
