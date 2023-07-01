import { useState } from 'react';

import { User } from '@api/types';

type Props = {
  user: User;
};

export const usePreferencesForm = ({ user }: Props) => {
  const { language, themeMode, emailNotificationsAgreement, newRecipesAgreement } = user;
  const [formValues, setFormValues] = useState({
    language,
    themeMode,
    emailNotificationsAgreement,
    newRecipesAgreement,
  });

  return { formValues, setFormValues };
};
