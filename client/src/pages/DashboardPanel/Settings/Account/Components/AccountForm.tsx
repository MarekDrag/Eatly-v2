import { User } from '@api/types';
import { useUserMutations } from '@api/user';
import { useTranslation } from '@hooks/index';
import { Box, FormField } from '@ui/index';

import { AccountFormValues, useAccountForm } from '../hooks/useAccountForm';
import { AccountFormFooter } from './AccountFormFooter';

type Props = {
  user: User;
};

export const AccountForm = ({ user }: Props) => {
  const { t } = useTranslation();
  const { handleSubmit, register, errors } = useAccountForm(user);
  const { updateUserAccountMutation } = useUserMutations();

  const onSubmit = (data: AccountFormValues) => {
    updateUserAccountMutation.mutate(data);
  };

  return (
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
  );
};
