import { useTranslation } from '@hooks/index';
import { useAuth } from '@hooks/useAuth';
import { Switch } from '@mui/material';
import { Typography, Box } from '@ui/index';

type Props = {
  handleChange: (checked: boolean, fieldName: 'emailNotificationsAgreement') => void;
};

export const EmailNotificationsSwitch = ({ handleChange }: Props) => {
  const { t } = useTranslation();
  const { user } = useAuth();

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
        defaultChecked={user.emailNotificationsAgreement}
        onChange={(_, checked) => handleChange(checked, 'emailNotificationsAgreement')}
      />
    </Box>
  );
};
