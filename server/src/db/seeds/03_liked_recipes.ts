import { faker } from '@faker-js/faker';
import { Knex } from 'knex';

import { permanentUser1 } from './01_users';
import { RecipeIds } from './02_recipes';

const generateLikedRecipes = () => {
  return {
    id: faker.string.uuid(),
    userId: permanentUser1.id,
    recipeId: faker.helpers.arrayElement(RecipeIds),
  };
};

const generateLikedRecipesArray = () => {
  return Array.from({ length: 30 }, generateLikedRecipes);
};

const LikedRecipesArray = generateLikedRecipesArray();

export async function seed(knex: Knex): Promise<void> {
  await knex('liked_recipes').insert(LikedRecipesArray).onConflict(['id']).merge();
}
