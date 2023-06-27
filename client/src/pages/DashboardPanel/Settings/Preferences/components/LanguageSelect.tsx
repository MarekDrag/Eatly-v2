import { useTranslation } from '@hooks/index';
import { useAuth } from '@hooks/useAuth';
import { SelectChangeEvent } from '@mui/material';
import { Select } from '@ui/index';

type Props = {
  handleChange: (event: SelectChangeEvent<unknown>, fieldName: 'language') => void;
};

export const LanguageSelect = ({ handleChange }: Props) => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const languagesOptions = [
    { label: t('English'), value: 'en' },
    { label: t('Polish'), value: 'pl' },
  ];

  return (
    <Select
      label={t('Language')}
      name="language"
      items={languagesOptions}
      defaultValue={user.language}
      onChange={(e) => handleChange(e, 'language')}
    />
  );
};
