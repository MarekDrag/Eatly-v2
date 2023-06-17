import { useNavigate } from 'react-router-dom';

import { useUserMutations } from '@api/User';
import { useTranslation } from '@hooks/index';
import { LoginLayout } from '@layout/LoginLayout';
import { FormField, Link, Typography } from '@ui/index';

import { SendButton } from './ForgetPassword.styles';
import { ForgetPasswordFormValues, useForgetPasswordForm } from './useForgetPaswordForm';

export const ForgetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleSubmit, register, errors } = useForgetPasswordForm();
  const { remindUserPassword } = useUserMutations();

  const onSubmit = (data: ForgetPasswordFormValues) => {
    remindUserPassword.mutate(data);
  };

  return (
    <LoginLayout>
      <Typography variant="h4" fontWeight={500} sx={{ color: '#189f80' }} width="100%" textAlign="center">
        {t('Forgot your password?')}
      </Typography>
      <Typography variant="body2" sx={{ color: '#aeb2b1' }}>
        {t(
          'Please fill in the email that you used to register. You will be sent an email with instructions on how to reset your password.',
        )}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', width: '100%', gap: '20px' }}>
        <FormField<ForgetPasswordFormValues>
          name="email"
          label={t('Email')}
          register={register}
          errorMessage={errors.email?.message}
          fullWidth
        />
        <SendButton type="submit" isLoading={remindUserPassword.isLoading}>
          {t('Send Email')}
        </SendButton>
      </form>
      <Typography variant="body2" sx={{ color: '#aeb2b1' }} textAlign="center" onClick={() => navigate('/login')}>
        {t('Remember your password?')} <Link>{t('Sign in')}</Link>
      </Typography>
    </LoginLayout>
  );
};
