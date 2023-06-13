import i18next from 'i18next';

import { useTranslation } from '@hooks/index';
import { SelectChangeEvent, Switch } from '@mui/material';
import { Typography, Select, Box } from '@ui/index';

export const Preferences = () => {
  const { t } = useTranslation();

  const Languages = [t('English'), t('Polish')];
  const DefaultTheme = [t('Light'), t('Dark')];

  const handleChangeLanguage = (event: SelectChangeEvent<unknown>) => {
    if (event.target.value === t('Polish')) {
      i18next.changeLanguage('pl');
    } else {
      i18next.changeLanguage('en');
    }
  };

  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr" width="100%" gap="20px">
      <Typography variant="h6" gridColumn="1 / 3">
        {t('Preferences')}
      </Typography>
      <Select
        label={t('Language')}
        defaultValue={t('English')}
        items={Languages}
        onChange={(e) => handleChangeLanguage(e)}
      />
      <Select label={t('Default Theme')} defaultValue={t('Light')} items={DefaultTheme} />
      <Box display="grid" gap="10px" paddingLeft="3px">
        <Box display="grid" gridTemplateColumns="2fr 1fr">
          <Box>
            <Typography variant="subtitle1" fontWeight={500}>
              {t('Email Notification')}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              {t('Get included on new features.')}
            </Typography>
          </Box>
          <Switch defaultChecked />
        </Box>
        <Box display="grid" gridTemplateColumns="2fr 1fr">
          <Box>
            <Typography variant="subtitle1" fontWeight={500}>
              {t('Show new recipes')}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              {t('Show new recipes in dashboard panel')}
            </Typography>
          </Box>
          <Switch defaultChecked />
        </Box>
      </Box>
    </Box>
  );
};
