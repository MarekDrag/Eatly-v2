import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { useTranslation } from '@hooks/index';
import { useAuth } from '@hooks/useAuth';
import { useMutation } from '@tanstack/react-query';

import {
  LoginUserRequirements,
  loginUserRequest,
  RegisterRequirements,
  createUserRequest,
  PasswordRemindRequirements,
  postPasswordRemindRequest,
} from '../requests';

export const useAuthMutations = () => {
  const { t } = useTranslation();
  const { setAuthContext } = useAuth();

  const loginUserMutation = useMutation(
    async (data: LoginUserRequirements) => {
      return (await loginUserRequest(data)).data;
    },
    {
      onSuccess: ({ accessToken }) => {
        setAuthContext({ accessToken });
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
      onSuccess: ({ accessToken }) => {
        setAuthContext({ accessToken });
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

  const remindUserPassword = useMutation(
    async (data: PasswordRemindRequirements) => {
      return (await postPasswordRemindRequest(data)).data;
    },
    {
      onSuccess: () => {
        toast.success(t('Message has been sent to your e-mail'));
      },
      onError: () => {
        toast.error(t('Service is currently not available'));
      },
    },
  );

  return { loginUserMutation, registerUserMutation, remindUserPassword };
};
