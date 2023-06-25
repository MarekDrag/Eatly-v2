import { User } from '@api/types';
import { axios } from '@config/axios';

export type RegisterRequirements = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

type createUserResponse = { user: User; accessToken: string };

export const createUserRequest = async (data: RegisterRequirements) => {
  return axios.post<createUserResponse>('/auth/register', data);
};
