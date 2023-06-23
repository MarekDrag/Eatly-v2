import { useAuthMutations } from '@api/auth';
import { useTranslation } from '@hooks/index';
import { FormField } from '@ui/index';

import { SendButton } from '../ForgetPassword.styles';
import { ForgetPasswordFormValues, useForgetPasswordForm } from './useForgetPaswordForm';

export const ForgetPasswordForm = () => {
  const { t } = useTranslation();
  const { handleSubmit, register, errors } = useForgetPasswordForm();
  const { remindUserPassword } = useAuthMutations();

  const onSubmit = (data: ForgetPasswordFormValues) => {
    remindUserPassword.mutate(data);
  };

  return (
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
  );
};
