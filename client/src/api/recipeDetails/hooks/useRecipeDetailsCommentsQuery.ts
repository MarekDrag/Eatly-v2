import { useInfiniteQuery } from '@tanstack/react-query';

import { getRecipeDetailsCommentsRequest } from '../requests';

type Props = {
  recipeId: string;
  params: string;
};

export const RECIPE_DETAILS_COMMENTS_QUERY_KEY = 'RECIPE_DETAILS_COMMENTS_QUERY_KEY';

export const useRecipeDetailsCommentsQuery = ({ recipeId, params }: Props) => {
  return useInfiniteQuery(
    [RECIPE_DETAILS_COMMENTS_QUERY_KEY, recipeId],
    () => getRecipeDetailsCommentsRequest({ recipeId, params }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.pagination.page === lastPage.pagination.pages ? undefined : lastPage.pagination.page + 1,
    },
  );
};
