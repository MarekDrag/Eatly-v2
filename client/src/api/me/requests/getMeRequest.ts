import { User } from '@api/types';
import { axios } from '@config/axios';

type getMeResponse = { user: User };

export const getMeRequest = async () => {
  return axios.get<getMeResponse>('/users/me');
};
