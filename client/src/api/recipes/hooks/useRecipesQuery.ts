import { useQuery } from '@tanstack/react-query';

import { GetRecipesRequestOptions, getRecipesRequest } from '../requests';

export const RECIPES_QUERY_KEY = 'RECIPES_QUERY_KEY';

export const useRecipesQuery = (options: GetRecipesRequestOptions) =>
  useQuery([RECIPES_QUERY_KEY, options], () => getRecipesRequest(options));
