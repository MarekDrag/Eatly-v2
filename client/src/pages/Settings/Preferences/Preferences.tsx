import i18next from 'i18next';

import { Box, SelectChangeEvent, Switch } from '@mui/material';
import { Typography, Select } from '@ui/index';

const Languages = ['English', 'Polish'];
const DefaultTheme = ['Light', 'Dark'];

export const Preferences = () => {
  const handleChangeLanguage = (event: SelectChangeEvent<unknown>) => {
    if (event.target.value === 'Polish') {
      i18next.changeLanguage('pl');
    } else {
      i18next.changeLanguage('en');
    }
  };

  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr" width="100%" gap="20px">
      <Typography variant="h6" gridColumn="1 / 3">
        Preferences
      </Typography>
      <Select label="Language" defaultValue="English" items={Languages} onChange={(e) => handleChangeLanguage(e)} />
      <Select label="Default Theme" defaultValue="Light" items={DefaultTheme} />
      <Box display="grid" gap="10px" paddingLeft="3px">
        <Box display="grid" gridTemplateColumns="2fr 1fr">
          <Box>
            <Typography variant="subtitle1" fontWeight={500}>
              Email Notification
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              Get included on new features.
            </Typography>
          </Box>
          <Switch defaultChecked />
        </Box>
        <Box display="grid" gridTemplateColumns="2fr 1fr">
          <Box>
            <Typography variant="subtitle1" fontWeight={500}>
              Show new recipes
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              Show new recipes in dashboard panel
            </Typography>
          </Box>
          <Switch defaultChecked />
        </Box>
      </Box>
    </Box>
  );
};
