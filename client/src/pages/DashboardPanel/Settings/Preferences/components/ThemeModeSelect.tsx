import { useTranslation } from '@hooks/index';
import { useAuth } from '@hooks/useAuth';
import { SelectChangeEvent } from '@mui/material';
import { Select } from '@ui/index';

type Props = {
  handleChange: (event: SelectChangeEvent<unknown>, fieldName: 'themeMode') => void;
};

export const ThemeModeSelect = ({ handleChange }: Props) => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const defaultThemeOptions = [
    { label: t('Light'), value: 'light' },
    { label: t('Dark'), value: 'dark' },
  ];

  return (
    <Select
      label={t('Default Theme')}
      name="themeMode"
      items={defaultThemeOptions}
      defaultValue={user.themeMode}
      onChange={(e) => handleChange(e, 'themeMode')}
    />
  );
};
