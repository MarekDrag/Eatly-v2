import { faker } from '@faker-js/faker';
import { Ingredient } from '@types';
import { Knex } from 'knex';

const ingredientsNames = [
  'Tomato',
  'Onion',
  'Garlic',
  'Basil',
  'Olive Oil',
  'Salt',
  'Pepper',
  'Pasta',
  'Cheese',
  'Chicken',
  'Broccoli',
  'Lemon',
  'Sugar',
  'Cumin',
  'Paprika',
  'Avocado',
  'Cilantro',
  'Ginger',
  'Soy Sauce',
  'Rice',
];

const measurementNames = [
  'Cup',
  'Tablespoon',
  'Teaspoon',
  'Ounce',
  'Pound',
  'Cloves',
  'Medium-sized',
  'Whole',
  'Ripe',
  'Minced',
  'Chopped',
  'Florets',
];

const generateIngredients = (): Ingredient => {
  return {
    id: faker.string.uuid(),
    measure: faker.helpers.arrayElement(measurementNames),
    name: faker.helpers.arrayElement(ingredientsNames),
  };
};

const generateIngredientsArray = () => {
  return Array.from({ length: 50 }, generateIngredients);
};

const IngredientsArray = generateIngredientsArray();
export const IngredientsIds = IngredientsArray.map((ingredient) => ingredient.id);

export async function seed(knex: Knex): Promise<void> {
  await knex('ingredients').insert(IngredientsArray).onConflict(['id']).merge();
}
