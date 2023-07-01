import { useTranslation } from '@hooks/index';
import { Switch } from '@mui/material';
import { Typography, Box } from '@ui/index';

type Props = {
  handleChange: (checked: boolean, fieldName: 'newRecipesAgreement') => void;
  defaultValue: boolean;
};

export const NewRecipesSwitch = ({ handleChange, defaultValue }: Props) => {
  const { t } = useTranslation();

  return (
    <Box display="grid" gridTemplateColumns="2fr 1fr">
      <Box>
        <Typography variant="subtitle1" fontWeight={500}>
          {t('Show new recipes')}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {t('Show new recipes in dashboard panel')}
        </Typography>
      </Box>
      <Switch
        name="newRecipesAgreement"
        defaultChecked={defaultValue}
        onChange={(_, checked) => handleChange(checked, 'newRecipesAgreement')}
      />
    </Box>
  );
};
