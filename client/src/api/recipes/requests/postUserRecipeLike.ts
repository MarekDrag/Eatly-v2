import { axios } from '@config/axios';

export type PostLikedRecipeRequirements = {
  recipeId: string;
};

export const postUserRecipeLike = async (data: PostLikedRecipeRequirements) => {
  return axios.post('/recipes/liked', data);
};
