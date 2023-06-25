import { useUserMutations } from '@api/user';
import { useTranslation } from '@hooks/index';
import { Typography, Box, FormField } from '@ui/index';

import { AccountFormFooter } from './Components/AccountFormFooter';
import { AvatarForm } from './Components/AvatarForm';
import { AccountFormValues, useAccountForm } from './hooks/useAccountForm';

export const Account = () => {
  const { t } = useTranslation();
  const { updateUserAccountMutation } = useUserMutations();
  const { handleSubmit, register, errors } = useAccountForm();

  const onSubmit = (data: AccountFormValues) => {
    updateUserAccountMutation.mutate(data);
  };

  return (
    <Box width="100%">
      <Typography variant="h6">{t('General info')}</Typography>
      <AvatarForm />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', gap: '20px' }}>
          <FormField<AccountFormValues>
            name="firstName"
            label={t('First Name')}
            register={register}
            errorMessage={errors.firstName?.message}
            fullWidth
          />
          <FormField<AccountFormValues>
            name="lastName"
            label={t('Last Name')}
            register={register}
            errorMessage={errors.lastName?.message}
            fullWidth
          />
          <FormField<AccountFormValues>
            name="email"
            label={t('Email')}
            register={register}
            errorMessage={errors.lastName?.message}
            fullWidth
            disabled
          />
        </Box>
        <AccountFormFooter />
      </form>
    </Box>
  );
};
