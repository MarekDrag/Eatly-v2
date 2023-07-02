import { toast } from 'react-toastify';

import { useTranslation } from '@hooks/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  DeleteLikedRecipeRequirements,
  PostLikedRecipeRequirements,
  deleteUserRecipeLike,
  postUserRecipeLike,
} from '../requests';
import { RECIPES_QUERY_KEY } from './useRecipesQuery';

export const useRecipeMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const addRecipeToUserLiked = useMutation((data: PostLikedRecipeRequirements) => postUserRecipeLike(data), {
    onSuccess: () => {
      queryClient.invalidateQueries([RECIPES_QUERY_KEY]);
    },
    onError: () => {
      toast.error(t('Service is currently not available'));
    },
  });

  const deleteRecipeFromUserLiked = useMutation((data: DeleteLikedRecipeRequirements) => deleteUserRecipeLike(data), {
    onSuccess: () => {
      queryClient.invalidateQueries([RECIPES_QUERY_KEY]);
    },
    onError: () => {
      toast.error(t('Service is currently not available'));
    },
  });

  return { addRecipeToUserLiked, deleteRecipeFromUserLiked };
};
