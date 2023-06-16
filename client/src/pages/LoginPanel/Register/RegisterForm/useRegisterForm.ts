import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from '@hooks/index';

const buildValidationSchema = (t: TFunction) =>
  z
    .object({
      firstName: z.string().min(3, t('First name must be at least 3 characters long')),
      lastName: z.string().min(3, t('Last name must be at least 3 characters long')),
      email: z.string().email(t('Invalid Email')),
      password: z
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
    .refine((data) => data.password === data.confirmPassword, {
      message: t("Passwords don't match"),
      path: ['confirmPassword'],
    });

export type RegisterFormValues = z.infer<ReturnType<typeof buildValidationSchema>>;

export const useRegisterForm = () => {
  const { t } = useTranslation();
  const validationSchema = buildValidationSchema(t);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(validationSchema),
  });

  return { handleSubmit, register, errors };
};
