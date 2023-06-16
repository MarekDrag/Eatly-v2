import { axios } from '@config/axios';

import { User } from '../types';

export type LoginProps = {
  email: string;
  password: string;
};

type LoginResponse = { user: User; accessToken: string };

export const loginRequest = async (data: LoginProps) => {
  return axios.post<LoginResponse>('/users/login', data);
};
