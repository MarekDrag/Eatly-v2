import { axios } from '@config/axios';

export type PatchUserPasswordRequirements = {
  password: string;
  newPassword: string;
};

export const patchUserPassword = async (data: PatchUserPasswordRequirements) => {
  return axios.patch('/users/password', data);
};
