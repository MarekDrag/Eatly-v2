import { useEffect, useState } from 'react';

import { useTranslation } from '@hooks/index';
import { SelectChangeEvent } from '@mui/material';

import { useUrlParams } from '@utils/useUrlParams';
import { CheckboxSelect } from '../CheckboxSelect';
import { useDebounce } from '@utils/useDebounce';

export const TypeSelect = () => {
  const { t } = useTranslation();
  const [typeFromUrl, setTypeToUrl] = useUrlParams('type');
  const [values, setValues] = useState<string[]>(typeFromUrl?.split(',') ?? []);
  const debouncedValues = useDebounce(values, 500);

  const options = [
    { label: t('Meat'), value: 'meat' },
    { label: t('Vege'), value: 'vege' },
  ];

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string[];
    setValues(value);
  };

  useEffect(() => {
    setTypeToUrl(debouncedValues.join(','));
  }, [debouncedValues]);

  return (
    <CheckboxSelect
      options={options}
      id="type-select"
      label={t('Type')}
      multiple
      values={values}
      onChange={handleChange}
    />
  );
};
