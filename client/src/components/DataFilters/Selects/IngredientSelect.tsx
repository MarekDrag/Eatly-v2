import { useTranslation } from '@hooks/index';
import { CheckboxSelect } from '@ui/index';

// TODO: add ingredient query
const ingredientsOptions = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];

export const IngredientSelect = () => {
  const { t } = useTranslation();

  return <CheckboxSelect options={ingredientsOptions} label={t('Ingredients')} id="ingredient-select" />;
};
