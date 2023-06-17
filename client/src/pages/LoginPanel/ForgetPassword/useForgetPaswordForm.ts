import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from '@hooks/index';

const buildValidationSchema = (t: TFunction) =>
  z.object({
    email: z.string().email(t('Invalid Email')),
  });

export type ForgetPasswordFormValues = z.infer<ReturnType<typeof buildValidationSchema>>;

export const useForgetPasswordForm = () => {
  const { t } = useTranslation();
  const validationSchema = buildValidationSchema(t);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ForgetPasswordFormValues>({
    resolver: zodResolver(validationSchema),
  });

  return { handleSubmit, register, errors };
};
