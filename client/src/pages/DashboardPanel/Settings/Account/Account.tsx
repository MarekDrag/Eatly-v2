import { useTranslation } from '@hooks/index';
import { Avatar } from '@mui/material';
import { Typography, Box } from '@ui/index';

import { AccountForm } from './AccountForm/AccountForm';

export const Account = () => {
  const { t } = useTranslation();

  return (
    <Box width="100%">
      <Typography variant="h6">{t('General info')}</Typography>
      <Avatar sx={{ width: 70, height: 70, marginTop: '20px', marginBottom: '30px' }} />
      <AccountForm />
    </Box>
  );
};
