import { axios } from '@config/axios';

export type DeleteUserRecipeRequirements = {
  recipeId: string;
};

export const deleteUserRecipe = async ({ recipeId }: DeleteUserRecipeRequirements) => {
  return axios.delete(`/recipes/${recipeId}`);
};
