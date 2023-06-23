import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuthMutations } from '@api/auth';
import { useTranslation } from '@hooks/index';
import { Box, FormField, TextField } from '@ui/index';

import { Footer } from '../../Footer';
import { AccountFormValues, useAccountForm } from './useAccountForm';

export const AccountForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { loginUserMutation } = useAuthMutations();
  const {} = useUserQuery();
  const { handleSubmit, register, errors } = useAccountForm();

  const onSubmit = (data: AccountFormValues) => {
    console.log('asd');
  };

  useEffect(() => {
    if (loginUserMutation.isSuccess) {
      navigate('/dashboard');
    }
  }, [loginUserMutation.isSuccess]);

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
        <TextField name="email" label={t('Email')} disabled fullWidth />
      </Box>
      <Footer />
    </form>
  );
};
