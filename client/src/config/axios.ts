import Axios, { InternalAxiosRequestConfig } from 'axios';

import { getCookie } from '@utils/cookies';

import { API_KEY, API_URL } from './env';

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      Authorization: API_KEY,
    },
  },
});

const setAccessToken = (config: InternalAxiosRequestConfig<any>) => {
  const accessToken = getCookie('accessToken');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

axios.interceptors.request.use(setAccessToken);
