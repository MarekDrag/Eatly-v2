import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuthMutations } from '@api/auth';
import { useTranslation } from '@hooks/index';
import { FormField } from '@ui/index';

import { SendButton } from '../Register.styles';
import { RegisterFormValues, useRegisterForm } from './useRegisterForm';

export const RegisterForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { registerUserMutation } = useAuthMutations();
  const { handleSubmit, register, errors } = useRegisterForm();

  const onSubmit = (data: RegisterFormValues) => {
    const { firstName, lastName, email, password } = data;
    registerUserMutation.mutate({ firstName, lastName, email, password });
  };

  useEffect(() => {
    if (registerUserMutation.isSuccess) {
      navigate('/dashboard');
    }
  }, [registerUserMutation.isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', width: '100%', gap: '20px' }}>
      <FormField<RegisterFormValues>
        name="firstName"
        label={t('First name')}
        register={register}
        errorMessage={errors.firstName?.message}
        fullWidth
      />
      <FormField<RegisterFormValues>
        name="lastName"
        label={t('Last name')}
        register={register}
        errorMessage={errors.lastName?.message}
        fullWidth
      />
      <FormField<RegisterFormValues>
        name="email"
        label={t('Email')}
        register={register}
        errorMessage={errors.email?.message}
        fullWidth
      />
      <FormField<RegisterFormValues>
        name="password"
        label={t('Password')}
        type="password"
        register={register}
        errorMessage={errors.password?.message}
        fullWidth
      />
      <FormField<RegisterFormValues>
        name="confirmPassword"
        label={t('Confirm Password')}
        type="password"
        register={register}
        errorMessage={errors.confirmPassword?.message}
        fullWidth
      />
      <SendButton type="submit" isLoading={registerUserMutation.isLoading}>
        {t('Sign up')}
      </SendButton>
    </form>
  );
};
//
