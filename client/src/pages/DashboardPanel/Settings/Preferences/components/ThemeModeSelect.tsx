import { useTranslation } from '@hooks/index';
import { SelectChangeEvent } from '@mui/material';
import { Select } from '@ui/index';

type Props = {
  handleChange: (event: SelectChangeEvent<unknown>, fieldName: 'themeMode') => void;
  defaultValue: 'light' | 'dark';
};

export const ThemeModeSelect = ({ handleChange, defaultValue }: Props) => {
  const { t } = useTranslation();

  const defaultThemeOptions = [
    { label: t('Light'), value: 'light' },
    { label: t('Dark'), value: 'dark' },
  ];

  return (
    <Select
      label={t('Default Theme')}
      name="themeMode"
      items={defaultThemeOptions}
      defaultValue={defaultValue}
      onChange={(e) => handleChange(e, 'themeMode')}
    />
  );
};
