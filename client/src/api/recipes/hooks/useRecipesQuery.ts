import { useQuery } from '@tanstack/react-query';
import { Options } from '@utils/useOptionsFromUrl';

import { getRecipesRequest } from '../requests';

export const RECIPES_QUERY_KEY = 'RECIPES_QUERY_KEY';

export const useRecipesQuery = (options: Options) => useQuery([RECIPES_QUERY_KEY, options], () => getRecipesRequest());
