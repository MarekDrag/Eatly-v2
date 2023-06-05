import { useTranslation } from '@hooks/index';
import { Avatar, Box, TextField } from '@mui/material';
import { Typography } from '@ui/index';

export const Account = () => {
  const { t } = useTranslation();

  return (
    <Box width="100%">
      <Typography variant="h6">{t('General info')}</Typography>
      <Avatar sx={{ width: 70, height: 70, marginTop: '20px', marginBottom: '30px' }} />
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
        <TextField label={t('First Name')} defaultValue="asdsa" />
        <TextField label={t('Last Name')} defaultValue="asdsa" />
        <TextField label={t('Email')} defaultValue="asdsa" />
      </Box>
    </Box>
  );
};
