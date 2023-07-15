import { Recipe } from '@api/types';
import { axios } from '@config/axios';
import { PaginatedResponseType, resolvePaginatedResponse } from '@utils/resolvePaginatedResponse';

export const getRecipesRequest = async (params: string) => {
  const url = '/recipes' + params;

  return resolvePaginatedResponse(await axios.get<PaginatedResponseType<Recipe>>(url));
};
