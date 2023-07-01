import { useTranslation } from '@hooks/index';
import { SelectChangeEvent } from '@mui/material';
import { Select } from '@ui/index';

type Props = {
  handleChange: (event: SelectChangeEvent<unknown>, fieldName: 'language') => void;
  defaultValue: 'en' | 'pl';
};

export const LanguageSelect = ({ handleChange, defaultValue }: Props) => {
  const { t } = useTranslation();

  const languagesOptions = [
    { label: t('English'), value: 'en' },
    { label: t('Polish'), value: 'pl' },
  ];

  return (
    <Select
      label={t('Language')}
      name="language"
      items={languagesOptions}
      defaultValue={defaultValue}
      onChange={(e) => handleChange(e, 'language')}
    />
  );
};
