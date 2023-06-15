import Axios from 'axios';

import { API_KEY, API_URL } from './env';

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      Authorization: API_KEY,
    },
  },
});
