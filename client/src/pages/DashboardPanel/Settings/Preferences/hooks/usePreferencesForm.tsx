import { useState } from 'react';

import { useAuth } from '@hooks/useAuth';

export const usePreferencesForm = () => {
  const { user } = useAuth();
  const { language, themeMode, emailNotificationsAgreement, newRecipesAgreement } = user;
  const [formValues, setFormValues] = useState({
    language,
    themeMode,
    emailNotificationsAgreement,
    newRecipesAgreement,
  });

  return { formValues, setFormValues };
};
