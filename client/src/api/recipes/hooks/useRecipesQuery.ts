import { useQuery } from '@tanstack/react-query';

import { getRecipesRequest } from '../requests';

export const RECIPES_QUERY_KEY = 'RECIPES_QUERY_KEY';

export const useRecipesQuery = (params: string) =>
  useQuery([RECIPES_QUERY_KEY, params], () => getRecipesRequest(params));
