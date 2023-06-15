import { axios } from '@config/axios';

export type LoginProps = {
  email: string;
  password: string;
};

type LoginResponse = { accessToken: string };

export const loginRequest = async (data: LoginProps) => {
  return axios.post<LoginResponse>('/users/login', data);
};
