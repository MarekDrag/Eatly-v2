import { User } from '@api/types';
import { axios } from '@config/axios';

type patchUserResponse = User;

export type PatchUserRequirements = {
  email?: string;
  firstName?: string;
  lastName?: string;
};

export const patchUser = async (data: PatchUserRequirements) => {
  return axios.patch<patchUserResponse>('/users', data);
};
