import { useState } from 'react';

import { icons } from '@config/icons';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Typography, Paper } from '@ui/index';

import { Account } from './Account';
import { Footer } from './Footer';
import { Password } from './Password';
import { Preferences } from './Preferences';
import { Wrapper } from './Settings.styles';

export const Settings = () => {
  const [value, setValue] = useState('Account');

  const handleListItemClick = (selectedValue: string) => {
    setValue(selectedValue);
  };

  return (
    <>
      <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
        <Typography variant="h4">Account Settings</Typography>
        <Typography variant="subtitle1" marginBottom="30px">
          Change your profile and account settings
        </Typography>
      </Box>
      <Wrapper>
        <Paper sx={{ padding: 0, height: '160px' }}>
          <List component="nav" sx={{ width: '100%' }}>
            <ListItemButton selected={value === 'Account'} onClick={() => handleListItemClick('Account')}>
              <ListItemIcon>{icons.person}</ListItemIcon>
              <ListItemText primary="Account" sx={{ color: 'text.primary' }} />
            </ListItemButton>
            <ListItemButton selected={value === 'Password'} onClick={() => handleListItemClick('Password')}>
              <ListItemIcon>{icons.lock}</ListItemIcon>
              <ListItemText primary="Password" sx={{ color: 'text.primary' }} />
            </ListItemButton>
            <ListItemButton selected={value === 'Preferences'} onClick={() => handleListItemClick('Preferences')}>
              <ListItemIcon>{icons.settings}</ListItemIcon>
              <ListItemText primary="Preferences" sx={{ color: 'text.primary' }} />
            </ListItemButton>
          </List>
        </Paper>
        <Paper>
          {value === 'Account' && <Account />}
          {value === 'Password' && <Password />}
          {value === 'Preferences' && <Preferences />}
          <Footer />
        </Paper>
      </Wrapper>
    </>
  );
};
