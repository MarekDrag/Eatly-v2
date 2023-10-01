import { faker } from '@faker-js/faker';
import { Knex } from 'knex';

import { UsersIds } from './01_users';
import { RecipeIds } from './02_recipes';

const generateRecipeComments = () => {
  return {
    id: faker.string.uuid(),
    recipeId: faker.helpers.arrayElement(RecipeIds),
    userId: faker.helpers.arrayElement(UsersIds),
    likes: faker.number.int({ min: 1, max: 200 }),
    content: faker.lorem.sentence({ min: 10, max: 30 }),
    createdAt: faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2023-06-01T00:00:00.000Z' }),
  };
};

const generateRecipesCommentsArray = () => {
  return Array.from({ length: 3000 }, generateRecipeComments);
};

const RecipesCommentsArray = generateRecipesCommentsArray();

export async function seed(knex: Knex): Promise<void> {
  await knex('recipes_comments').insert(RecipesCommentsArray).onConflict(['id']).merge();
}
