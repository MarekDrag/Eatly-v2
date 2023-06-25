import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { ME_QUERY_KEY } from '@api/me';
import { User } from '@api/types';
import { useTranslation } from '@hooks/index';
import { useAuth } from '@hooks/useAuth';
import { QueryClient, useMutation } from '@tanstack/react-query';

import {
  PatchUserImageRequirements,
  PatchUserRequirements,
  deleteUser,
  patchUser,
  patchUserImage,
  PatchUserPasswordRequirements,
  patchUserPassword,
} from '../requests';

export const useUserMutations = () => {
  const { t } = useTranslation();
  const queryClient = new QueryClient();
  const { setAuthContext, logout } = useAuth();

  const updateUserAccountMutation = useMutation(
    async (data: PatchUserRequirements) => {
      return (await patchUser(data)).data;
    },
    {
      onSuccess: (user: User) => {
        setAuthContext({ user });
        queryClient.invalidateQueries([ME_QUERY_KEY]);
        toast.success(t('Your account has been updated'));
      },
      onError: () => {
        toast.error(t('Service is currently not available'));
      },
    },
  );

  const deleteUserAccountMutation = useMutation(() => deleteUser(), {
    onSuccess: () => {
      queryClient.invalidateQueries([ME_QUERY_KEY]);
      logout();
    },
    onError: () => {
      toast.error(t('Service is currently not available'));
    },
  });

  const updateUserImageMutation = useMutation(
    async (data: PatchUserImageRequirements) => {
      return (await patchUserImage(data)).data;
    },
    {
      onSuccess: (user: User) => {
        setAuthContext({ user });
        queryClient.invalidateQueries([ME_QUERY_KEY]);
        toast.success(t('Your image has been updated'));
      },
      onError: () => {
        toast.error(t('Service is currently not available'));
      },
    },
  );

  const updateUserPasswordMutation = useMutation(
    async (data: PatchUserPasswordRequirements) => {
      return (await patchUserPassword(data)).data;
    },
    {
      onSuccess: () => {
        toast.success(t('Your password has been updated'));
      },
      onError: (err: AxiosError) => {
        if (err.response?.status === 409) {
          toast.error(t('Incorrect password provided'));
        } else {
          toast.error(t('Service is currently not available'));
        }
      },
    },
  );

  return {
    updateUserAccountMutation,
    deleteUserAccountMutation,
    updateUserImageMutation,
    updateUserPasswordMutation,
  };
};
