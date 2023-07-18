import { useQuery } from '@tanstack/react-query';

import { GetUserRecipesRequirements, getUserRecipesRequest } from '../requests';

export const USER_RECIPES_QUERY_KEY = 'USER_RECIPES_QUERY_KEY';

type Props = GetUserRecipesRequirements & {
  isEnabled: boolean;
};

export const useUserRecipesQuery = ({ userId, params, isEnabled }: Props) =>
  useQuery([USER_RECIPES_QUERY_KEY, userId, params], () => getUserRecipesRequest({ userId, params }), {
    enabled: isEnabled,
  });
