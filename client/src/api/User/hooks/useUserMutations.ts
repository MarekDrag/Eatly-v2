import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { useTranslation } from '@hooks/index';
import { useAuth } from '@hooks/useAuth';
import { useMutation } from '@tanstack/react-query';

import { LoginProps, loginRequest } from '../requests';

export const useUserMutations = () => {
  const { t } = useTranslation();
  const { setAuthContext } = useAuth();

  const loginMutation = useMutation(
    async (body: LoginProps) => {
      return (await loginRequest(body)).data;
    },
    {
      onSuccess: ({ accessToken, user }) => {
        setAuthContext({ user, accessToken });
      },
      onError: (res: AxiosError) => {
        if (res.request.status === 401) {
          toast.error(t('Incorrect Email or Password'));
        } else {
          toast.error(t('Service is currently not available'));
        }
      },
    },
  );

  return { loginMutation };
};
