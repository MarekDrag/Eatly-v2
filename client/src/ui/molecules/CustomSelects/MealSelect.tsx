import { useTranslation } from '@hooks/index';
import { CheckboxSelect } from '@ui/index';

const mealOptions = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'] as const;

export const MealSelect = () => {
  const { t } = useTranslation();

  const translatedOptions = mealOptions.map((meal) => t(meal));

  return <CheckboxSelect options={translatedOptions} label={t('Meal')} id="meal-select" />;
};
