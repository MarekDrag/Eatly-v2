import { Comment } from '@api/types';
import { axios } from '@config/axios';
import { PaginatedResponseType, resolvePaginatedResponse } from '@utils/resolvePaginatedResponse';

export type GetRecipeDetailsCommentsRequirements = {
  recipeId: string;
  params: string;
};

export const getRecipeDetailsCommentsRequest = async ({ recipeId, params }: GetRecipeDetailsCommentsRequirements) => {
  const url = `/recipes/${recipeId}/comments` + params;

  return resolvePaginatedResponse(await axios.get<PaginatedResponseType<Comment>>(url));
};
