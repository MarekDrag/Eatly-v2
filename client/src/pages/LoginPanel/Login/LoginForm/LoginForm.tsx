import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuthMutations } from '@api/auth';
import { useTranslation } from '@hooks/index';
import { FormField } from '@ui/index';

import { SendButton } from '../Login.styles';
import { LoginFormValues, useLoginForm } from './useLoginForm';

export const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { loginUserMutation } = useAuthMutations();
  const { handleSubmit, register, errors } = useLoginForm();

  const onSubmit = (data: LoginFormValues) => {
    loginUserMutation.mutate(data);
  };

  useEffect(() => {
    if (loginUserMutation.isSuccess) {
      navigate('/dashboard');
    }
  }, [loginUserMutation.isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', width: '100%', gap: '20px' }}>
      <FormField<LoginFormValues>
        name="email"
        label={t('Email')}
        register={register}
        errorMessage={errors.email?.message}
        fullWidth
      />
      <FormField<LoginFormValues>
        name="password"
        label={t('Password')}
        type="password"
        register={register}
        errorMessage={errors.password?.message}
        fullWidth
      />
      <SendButton type="submit" isLoading={loginUserMutation.isLoading}>
        {t('Sign in')}
      </SendButton>
    </form>
  );
};
//
