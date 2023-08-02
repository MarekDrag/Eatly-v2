import { useState } from 'react';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Typography, Paper, Box } from '@ui/index';

import { Account } from './Account';
import { Password } from './Password';
import { Preferences } from './Preferences';
import { Wrapper } from './Settings.styles';

export const Settings = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('Account');

  const handleListItemClick = (selectedValue: string) => {
    setValue(selectedValue);
  };

  const renderTab = () => {
    switch (value) {
      case 'Account':
        return <Account />;
      case 'Password':
        return <Password />;
      case 'Preferences':
        return <Preferences />;
      default:
        return <Account />;
    }
  };

  return (
    <>
      <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
        <Typography variant="h4"> {t('Account Settings')}</Typography>
        <Typography variant="subtitle1" marginBottom="30px">
          {t('Change your profile and account settings')}
        </Typography>
      </Box>
      <Wrapper>
        <Paper sx={{ padding: 0, height: '160px' }}>
          <List component="nav" sx={{ width: '100%' }}>
            <ListItemButton selected={value === 'Account'} onClick={() => handleListItemClick('Account')}>
              <ListItemIcon>{icons.person}</ListItemIcon>
              <ListItemText primary={t('Account')} sx={{ color: 'text.primary' }} />
            </ListItemButton>
            <ListItemButton selected={value === 'Password'} onClick={() => handleListItemClick('Password')}>
              <ListItemIcon>{icons.lock}</ListItemIcon>
              <ListItemText primary={t('Password')} sx={{ color: 'text.primary' }} />
            </ListItemButton>
            <ListItemButton selected={value === 'Preferences'} onClick={() => handleListItemClick('Preferences')}>
              <ListItemIcon>{icons.settings}</ListItemIcon>
              <ListItemText primary={t('Preferences')} sx={{ color: 'text.primary' }} />
            </ListItemButton>
          </List>
        </Paper>
        <Paper>{renderTab()}</Paper>
      </Wrapper>
    </>
  );
};
