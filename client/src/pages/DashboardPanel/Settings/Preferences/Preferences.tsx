import { useMeQuery } from '@api/me';
import { useUserMutations } from '@api/user';
import { useTranslation } from '@hooks/index';
import { CircularProgress, SelectChangeEvent } from '@mui/material';
import { Typography, Box } from '@ui/index';

import { EmailNotificationsSwitch } from './components/EmailNotificationsSwitch';
import { LanguageSelect } from './components/LanguageSelect';
import { NewRecipesSwitch } from './components/NewRecipesSwitch';
import { ThemeModeSelect } from './components/ThemeModeSelect';

export const Preferences = () => {
  const { t } = useTranslation();
  const { data: meData, isSuccess } = useMeQuery();
  const { updateUserAccountMutation } = useUserMutations();

  const handleChangeSelect = (event: SelectChangeEvent<unknown>, fieldName: 'themeMode' | 'language') => {
    const selectedValue = event.target.value;
    updateUserAccountMutation.mutate({ [fieldName]: selectedValue });
  };

  const handleChangeSwitch = (checked: boolean, fieldName: 'emailNotificationsAgreement' | 'newRecipesAgreement') => {
    updateUserAccountMutation.mutate({ [fieldName]: checked });
  };

  if (!isSuccess) {
    return (
      <Box width="100%">
        <Typography variant="h6">{t('General info')}</Typography>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box width="100%">
      <Typography variant="h6" gridColumn="1 / 3">
        {t('Preferences')}
      </Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="20px" marginTop="30px">
        <LanguageSelect handleChange={handleChangeSelect} defaultValue={meData.language} />
        <ThemeModeSelect handleChange={handleChangeSelect} defaultValue={meData.themeMode} />
        <Box display="grid" gap="10px" paddingLeft="3px">
          <EmailNotificationsSwitch
            handleChange={handleChangeSwitch}
            defaultValue={meData.emailNotificationsAgreement}
          />
          <NewRecipesSwitch handleChange={handleChangeSwitch} defaultValue={meData.newRecipesAgreement} />
        </Box>
      </Box>
    </Box>
  );
};
