import { User } from '@api/types';
import { axios } from '@config/axios';

type patchUserResponse = User;

export type PatchUserRequirements = {
  email?: string;
  firstName?: string;
  lastName?: string;
  language?: 'en' | 'pl';
  themeMode?: 'light' | 'dark';
  emailNotificationsAgreement?: boolean;
  newRecipesAgreement?: boolean;
};

export const patchUser = async (data: PatchUserRequirements) => {
  return axios.patch<patchUserResponse>('/users', data);
};
