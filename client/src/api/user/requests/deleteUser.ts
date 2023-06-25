import { axios } from '@config/axios';

export const deleteUser = async () => {
  return axios.delete('/users');
};
