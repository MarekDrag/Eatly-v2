import { Recipe } from '@api/types';
import { axios } from '@config/axios';
import { PaginatedResponseType, resolvePaginatedResponse } from '@utils/resolvePaginatedResponse';

export type GetUserRecipesRequirements = {
  params: string;
  userId: string;
};

export const getUserRecipesRequest = async ({ params, userId }: GetUserRecipesRequirements) => {
  const url = `/recipes/users/${userId}` + params;

  return resolvePaginatedResponse(await axios.get<PaginatedResponseType<Recipe>>(url));
};
