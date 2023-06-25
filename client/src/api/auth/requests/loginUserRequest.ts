import { User } from '@api/types';
import { axios } from '@config/axios';

export type LoginUserRequirements = {
  email: string;
  password: string;
};

type LoginUserResponse = { user: User; accessToken: string };

export const loginUserRequest = async (data: LoginUserRequirements) => {
  return axios.post<LoginUserResponse>('/auth/login', data);
};
