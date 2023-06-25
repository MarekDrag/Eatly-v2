import { useTranslation } from '@hooks/index';
import { styled } from '@mui/material';
import { Box, Typography } from '@ui/index';

import { PasswordForm } from './PasswordForm/PasswordForm';

export const ListItem = styled('li')(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const Password = () => {
  const { t } = useTranslation();

  return (
    <Box width="100%">
      <Typography variant="h6">{t('Password')}</Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap="20px">
        <PasswordForm />
        <Box marginLeft="10%" marginTop="30px">
          <Typography variant="subtitle1">Password requirements:</Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {t('Ensure that these requirements are met')}:
          </Typography>
          <ul>
            <ListItem>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {t('Minimum 8 characters long')}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {t('At least one lowercase character')}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {t('At least one uppercase character')}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {t('At least one number or symbol')}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {t('The new password must be different from the old one')}
              </Typography>
            </ListItem>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};
