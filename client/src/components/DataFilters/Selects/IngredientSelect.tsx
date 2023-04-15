import { CheckboxSelect } from '@ui/index';

// TODO: add ingredient query
const ingredientsOptions = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];

export const IngredientSelect = () => {
  return <CheckboxSelect options={ingredientsOptions} label="Ingredient" id="ingredient-select" />;
};
