import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from '@hooks/index';

const buildValidationSchema = (t: TFunction) =>
  z
    .object({
      password: z
        .string()
        .min(8, t('Password must be at least 8 characters long'))
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
          t('Password must contain at least one lowercase letter, one uppercase letter, and one number'),
        ),
      newPassword: z
        .string()
        .min(8, t('Password must be at least 8 characters long'))
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
          t('Password must contain at least one lowercase letter, one uppercase letter, and one number'),
        ),
      confirmPassword: z
        .string()
        .min(8, t('Password must be at least 8 characters long'))
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
          t('Password must contain at least one lowercase letter, one uppercase letter, and one number'),
        ),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t("Passwords don't match"),
      path: ['confirmPassword'],
    })
    .refine((data) => data.password !== data.newPassword, {
      message: t('The new password must be different from the old one'),
      path: ['newPassword'],
    });

export type PasswordFormValues = z.infer<ReturnType<typeof buildValidationSchema>>;

export const usePasswordForm = () => {
  const { t } = useTranslation();
  const validationSchema = buildValidationSchema(t);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(validationSchema),
  });

  return { handleSubmit, register, errors, reset };
};
