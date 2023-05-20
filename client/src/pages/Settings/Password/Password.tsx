import { useState } from 'react';

import { Box, styled } from '@mui/material';
import { Typography } from '@ui/index';

import { PasswordField } from './PasswordField';

export const ListItem = styled('li')(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box width="100%">
      <Typography variant="h6">Password</Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap="20px">
        <Box display="grid" gridTemplateColumns="1fr" gap="20px" marginTop="30px">
          <PasswordField
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            label="Current Password"
            defaultValue="Marek"
          />
          <PasswordField
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            label="New Password"
          />
          <PasswordField
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            label="Confirm Password"
          />
        </Box>
        <Box marginLeft="10%" marginTop="30px">
          <Typography variant="subtitle1">Password requirements:</Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            Ensure that these requirements are met:
          </Typography>
          <ul>
            <ListItem>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                Minimum 8 characters long
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                At least one lowercase character
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                At least one uppercase character
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                At least one number or symbol
              </Typography>
            </ListItem>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};
