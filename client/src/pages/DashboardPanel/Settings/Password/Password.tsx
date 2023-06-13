import { useState } from 'react';

import { useTranslation } from '@hooks/index';
import { styled } from '@mui/material';
import { Box, Typography } from '@ui/index';

import { PasswordField } from './PasswordField';

export const ListItem = styled('li')(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const Password = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box width="100%">
      <Typography variant="h6">{t('Password')}</Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap="20px">
        <Box display="grid" gridTemplateColumns="1fr" gap="20px" marginTop="30px">
          <PasswordField
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            label={t('Current Password')}
            defaultValue="Marek"
          />
          <PasswordField
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            label={t('New Password')}
          />
          <PasswordField
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            label={t('Confirm Password')}
          />
        </Box>
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
          </ul>
        </Box>
      </Box>
    </Box>
  );
};
