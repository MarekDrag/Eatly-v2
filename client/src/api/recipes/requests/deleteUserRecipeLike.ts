import { axios } from '@config/axios';

export type DeleteLikedRecipeRequirements = {
  recipeId: string;
};

export const deleteUserRecipeLike = async (data: DeleteLikedRecipeRequirements) => {
  return axios.delete(`/recipes/liked/${data.recipeId}`);
};
