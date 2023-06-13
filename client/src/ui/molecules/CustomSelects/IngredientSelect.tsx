import { useTranslation } from '@hooks/index';
import { Select } from '@ui/index';

// TODO: add ingredient query
const ingredientsOptions = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];

export const IngredientSelect = () => {
  const { t } = useTranslation();

  return <Select items={ingredientsOptions} label={t('Ingredient')} id="ingredient-select" />;
};
