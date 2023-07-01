import { Recipe } from '@api/types';
import { PaginatedResponseType, providePaginationToUrl, resolvePaginatedResponse } from '@api/utils';
import { axios } from '@config/axios';

export type GetRecipesRequestOptions = {
  pagination: {
    page: number;
    limit: number;
  };
};

export const getRecipesRequest = async (options: GetRecipesRequestOptions) => {
  const url = providePaginationToUrl({ url: '/recipes', pagination: options.pagination });

  return resolvePaginatedResponse(await axios.get<PaginatedResponseType<Recipe>>(url));
};
