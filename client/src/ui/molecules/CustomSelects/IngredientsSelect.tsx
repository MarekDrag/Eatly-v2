import { useTranslation } from '@hooks/index';
import { CheckboxSelect } from '@ui/index';

// TODO: add ingredient query
const ingredientsOptions = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];

export const IngredientsSelect = () => {
  const { t } = useTranslation();
  return <div></div>;
  // return <CheckboxSelect options={ingredientsOptions} label={t('Ingredients')} id="ingredient-select" />;
};
