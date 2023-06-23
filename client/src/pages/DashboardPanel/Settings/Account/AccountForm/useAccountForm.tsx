import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from '@hooks/index';

const buildValidationSchema = (t: TFunction) =>
  z.object({
    firstName: z.string().min(3, t('First name must be at least 3 characters long')),
    lastName: z.string().min(3, t('Last name must be at least 3 characters long')),
  });

export type AccountFormValues = z.infer<ReturnType<typeof buildValidationSchema>>;

export const useAccountForm = () => {
  const { t } = useTranslation();
  const validationSchema = buildValidationSchema(t);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AccountFormValues>({
    resolver: zodResolver(validationSchema),
  });

  return { handleSubmit, register, errors };
};
