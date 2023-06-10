import { useTranslation } from '@hooks/index';
import { CheckboxSelect } from '@ui/index';

// TODO: add ingredient query
const ingredientsOptions = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];

type Props = {
  label?: string;
};

export const IngredientsSelect = ({ label }: Props) => {
  const { t } = useTranslation();

  return <CheckboxSelect options={ingredientsOptions} label={label ?? t('Ingredients')} id="ingredient-select" />;
};
