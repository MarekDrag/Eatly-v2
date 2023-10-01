import { Recipe } from '@api/types';
import { axios } from '@config/axios';

export type GetRecipeDetailsRequirements = {
  recipeId: string;
};

export const getRecipeDetailsRequest = async ({ recipeId }: GetRecipeDetailsRequirements) => {
  const url = `/recipes/${recipeId}`;

  return axios.get<Recipe>(url);
};
