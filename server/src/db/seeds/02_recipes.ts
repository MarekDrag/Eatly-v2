import { faker } from '@faker-js/faker';
import { Knex } from 'knex';

import { UsersIds } from './01_users';

const recipeNames = [
  'Spaghetti Bolognese',
  'Chicken Parmesan',
  'Vegetable Stir-Fry',
  'Beef Tacos',
  'Caesar Salad',
  'Mushroom Risotto',
  'BBQ Ribs',
  'Lemon Garlic Shrimp',
  'Margherita Pizza',
  'Thai Green Curry',
  'Chicken Alfredo',
  'Greek Salad',
  'Spinach and Feta Stuffed Chicken',
  'Chocolate Chip Cookies',
  'Beef Stroganoff',
  'Caprese Skewers',
  'Baked Salmon with Dill Sauce',
  'Vegetable Lasagna',
  'Mango Salsa Chicken',
  'Apple Pie',
];

const STEPS = JSON.stringify([
  { order: 1, content: faker.lorem.sentence({ min: 10, max: 40 }) },
  { order: 2, content: faker.lorem.sentence({ min: 10, max: 40 }) },
  { order: 3, content: faker.lorem.sentence({ min: 10, max: 40 }) },
  { order: 4, content: faker.lorem.sentence({ min: 10, max: 40 }) },
  { order: 5, content: faker.lorem.sentence({ min: 10, max: 40 }) },
]);

const generateRecipe = () => {
  return {
    id: faker.string.uuid(),
    name: faker.helpers.arrayElement(recipeNames),
    imgUrl: faker.image.url(),
    ratingValue: faker.number.float({ min: 1, max: 5, precision: 0.01 }),
    reviewsNumber: faker.number.int({ min: 1, max: 2000 }),
    description: faker.lorem.sentence({ min: 10, max: 50 }),
    type: faker.helpers.arrayElement(['vege', 'meat']),
    meal: faker.helpers.arrayElement(['breakfast', 'dinner', 'lunch', 'snack', 'dessert']),
    creatorId: faker.helpers.arrayElement(UsersIds),
    status: faker.helpers.arrayElement(['public', 'private']),
    cookingTime: Math.floor(Math.random() * 23 + 1) * 5, // random number between 5 and 120 incremented by 5
    steps: STEPS,
    createdAt: faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2023-06-01T00:00:00.000Z' }),
  };
};

const generateRecipesArray = () => {
  return Array.from({ length: 300 }, generateRecipe);
};

export const RecipesArray = generateRecipesArray();
export const RecipeIds = RecipesArray.map((recipe) => recipe.id);

export async function seed(knex: Knex): Promise<void> {
  await knex('recipes').insert(RecipesArray).onConflict(['id']).merge();
}
