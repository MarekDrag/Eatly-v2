import { useTranslation } from '@hooks/index';
import { Switch } from '@mui/material';
import { Typography, Box } from '@ui/index';

type Props = {
  handleChange: (checked: boolean, fieldName: 'emailNotificationsAgreement') => void;
  defaultValue: boolean;
};

export const EmailNotificationsSwitch = ({ handleChange, defaultValue }: Props) => {
  const { t } = useTranslation();

  return (
    <Box display="grid" gridTemplateColumns="2fr 1fr">
      <Box>
        <Typography variant="subtitle1" fontWeight={500}>
          {t('Email Notification')}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {t('Get included on new features.')}
        </Typography>
      </Box>
      <Switch
        name="emailNotificationsAgreement"
        defaultChecked={defaultValue}
        onChange={(_, checked) => handleChange(checked, 'emailNotificationsAgreement')}
      />
    </Box>
  );
};
