import { User } from '@api/types';
import { axios } from '@config/axios';

type patchUserImageResponse = User;

export type PatchUserImageRequirements = {
  image: File;
};

export const patchUserImage = async ({ image }: PatchUserImageRequirements) => {
  const formData = new FormData();
  formData.append('image', image);

  return axios.patch<patchUserImageResponse>('/users/image', formData);
};
