import { axios } from '@config/axios';

import { User } from '../../types/user';

export type LoginUserRequirements = {
  email: string;
  password: string;
};

type LoginUserResponse = { user: User; accessToken: string };

export const loginUserRequest = async (data: LoginUserRequirements) => {
  return axios.post<LoginUserResponse>('/auth/login', data);
};
