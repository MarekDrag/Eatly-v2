import { useEffect, useState } from 'react';

import { useTranslation } from '@hooks/index';
import { SelectChangeEvent } from '@mui/material';

import { CheckboxSelect } from '../CheckboxSelect';
import { useUrlParams } from '@utils/useUrlParams';
import { useDebounce } from '@utils/useDebounce';

export const MealSelect = () => {
  const { t } = useTranslation();
  const [mealsFromUrl, setMealsToUrl] = useUrlParams('meal');
  const [values, setValues] = useState<string[]>(mealsFromUrl?.split(',') ?? []);
  const debouncedValues = useDebounce(values, 500);

  const handleChange = (event: SelectChangeEvent<unknown>) => setValues(event.target.value as string[]);

  useEffect(() => {
    setMealsToUrl(debouncedValues.join(','));
  }, [debouncedValues]);

  const options = [
    { label: t('Breakfast'), value: 'breakfast' },
    { label: t('Lunch'), value: 'lunch' },
    { label: t('Dinner'), value: 'dinner' },
    { label: t('Dessert'), value: 'dessert' },
    { label: t('Snack'), value: 'snack' },
  ];

  return (
    <CheckboxSelect
      options={options}
      label={t('Meal')}
      id="meal-select"
      multiple
      onChange={handleChange}
      values={values}
    />
  );
};
