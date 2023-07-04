import { Recipe } from '@api/types';
import { PaginatedResponseType, resolvePaginatedResponse } from '@api/utils';
import { axios } from '@config/axios';

export const getRecipesRequest = async () => {
  const url = '/recipes' + location.search;

  return resolvePaginatedResponse(await axios.get<PaginatedResponseType<Recipe>>(url));
};
