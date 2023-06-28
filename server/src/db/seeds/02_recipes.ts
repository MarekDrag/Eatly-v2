import { faker } from '@faker-js/faker';
import { Knex } from 'knex';

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

const generateRecipe = () => {
  return {
    id: faker.string.uuid(),
    name: faker.helpers.arrayElement(recipeNames),
    img_url: faker.image.url(),
    rating_value: faker.number.float({ min: 1, max: 5, precision: 0.01 }),
    reviews_number: faker.number.int({ min: 1, max: 2000 }),
    description: faker.lorem.sentence({ min: 10, max: 100 }),
    time: Math.floor(Math.random() * 23 + 1) * 5, // random number between 5 and 120 incremented by 5
  };
};

const generateRecipesArray = () => {
  return Array.from({ length: 200 }, generateRecipe);
};

export const RecipesArray = generateRecipesArray();

export async function seed(knex: Knex): Promise<void> {
  await knex('recipes').insert(RecipesArray).onConflict(['id']).merge();
}
