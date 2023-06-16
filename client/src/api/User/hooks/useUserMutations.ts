import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { useTranslation } from '@hooks/index';
import { useAuth } from '@hooks/useAuth';
import { useMutation } from '@tanstack/react-query';

import { LoginUserRequirements, loginUserRequest, RegisterRequirements, createUserRequest } from '../requests';

export const useUserMutations = () => {
  const { t } = useTranslation();
  const { setAuthContext } = useAuth();

  const loginUserMutation = useMutation(
    async (data: LoginUserRequirements) => {
      return (await loginUserRequest(data)).data;
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

  const registerUserMutation = useMutation(
    async (data: RegisterRequirements) => {
      return (await createUserRequest(data)).data;
    },
    {
      onSuccess: ({ accessToken, user }) => {
        setAuthContext({ user, accessToken });
      },
      onError: (res: AxiosError) => {
        if (res.request.status === 409) {
          toast.error(t('User with this email already exist'));
        } else {
          toast.error(t('Service is currently not available'));
        }
      },
    },
  );

  return { loginUserMutation, registerUserMutation };
};
