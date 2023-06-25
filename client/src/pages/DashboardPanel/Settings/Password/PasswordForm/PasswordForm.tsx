import { useEffect, useState } from 'react';

import { useUserMutations } from '@api/user';
import { useTranslation } from '@hooks/index';
import { Box } from '@ui/index';

import { SettingsFooter } from '../../SettingsFooter';
import { PasswordField } from './PasswordField';
import { PasswordFormValues, usePasswordForm } from './usePasswordForm';

export const PasswordForm = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const { updateUserPasswordMutation } = useUserMutations();
  const { handleSubmit, register, errors, reset } = usePasswordForm();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = ({ password, newPassword }: PasswordFormValues) => {
    updateUserPasswordMutation.mutate({ password, newPassword });
  };

  useEffect(() => {
    if (updateUserPasswordMutation.isSuccess) {
      reset();
    }
  }, [updateUserPasswordMutation.isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="grid" gridTemplateColumns="1fr" gap="20px" marginTop="30px">
        <PasswordField<PasswordFormValues>
          label={t('Current Password')}
          name="password"
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          register={register}
          errorMessage={errors.password?.message}
        />
        <PasswordField<PasswordFormValues>
          label={t('New Password')}
          name="newPassword"
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          register={register}
          errorMessage={errors.newPassword?.message}
        />
        <PasswordField<PasswordFormValues>
          label={t('Confirm Password')}
          name="confirmPassword"
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          register={register}
          errorMessage={errors.confirmPassword?.message}
        />
      </Box>
      <SettingsFooter />
    </form>
  );
};
