import { axios } from '@config/axios';

export type PasswordRemindRequirements = {
  email: string;
};

export const postPasswordRemindRequest = async (data: PasswordRemindRequirements) => {
  return axios.post('/users/password/remind', data);
};
