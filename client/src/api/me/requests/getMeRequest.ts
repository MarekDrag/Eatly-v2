import { User } from '@api/types';
import { axios } from '@config/axios';

export const getMeRequest = async () => {
  return axios.get<User>('/users/me');
};
