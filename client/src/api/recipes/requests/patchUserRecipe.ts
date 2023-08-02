import { axios } from '@config/axios';

type PatchUserRecipePayload = {
  imgUrl: string | null;
  name: string;
  time: number;
  description: string;
  type: 'meat' | 'vege';
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert';
  status: 'public';
  deletedAt: string;
};

export type PatchUserRecipeRequirements = {
  recipeId: string;
  payload: Partial<PatchUserRecipePayload>;
};

export const patchUserRecipe = async ({ recipeId, payload }: PatchUserRecipeRequirements) => {
  return axios.patch(`/recipes/${recipeId}`, payload);
};
