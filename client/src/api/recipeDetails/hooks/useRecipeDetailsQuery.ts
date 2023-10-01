import { useQuery } from '@tanstack/react-query';

import { getRecipeDetailsRequest } from '../requests';

type Props = {
  recipeId: string;
  enabled?: boolean;
};

export const RECIPE_DETAILS_QUERY_KEY = 'RECIPE_DETAILS_QUERY_KEY';

export const useRecipeDetailsQuery = ({ recipeId, enabled }: Props) => {
  return useQuery(
    [RECIPE_DETAILS_QUERY_KEY, recipeId],
    async () => {
      const { data } = await getRecipeDetailsRequest({ recipeId });
      return data;
    },
    {
      enabled,
    },
  );
};
