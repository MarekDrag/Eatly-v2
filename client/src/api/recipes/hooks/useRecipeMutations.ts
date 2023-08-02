import { toast } from 'react-toastify';

import { useTranslation } from '@hooks/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  DeleteLikedRecipeRequirements,
  PatchUserRecipeRequirements,
  PostLikedRecipeRequirements,
  deleteUserRecipeLike,
  patchUserRecipe,
  postUserRecipeLike,
  deleteUserRecipe,
} from '../requests';
import { DeleteUserRecipeRequirements } from '../requests/deleteUserRecipe';
import { RECIPES_QUERY_KEY } from './useRecipesQuery';
import { USER_RECIPES_QUERY_KEY } from './useUserRecipesQuery';

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

  const updateUserRecipe = useMutation((data: PatchUserRecipeRequirements) => patchUserRecipe(data), {
    onSuccess: () => {
      queryClient.invalidateQueries([USER_RECIPES_QUERY_KEY]);
      toast.success(t('Recipe updated!'));
    },
    onError: () => {
      toast.error(t('Service is currently not available'));
    },
  });

  const archiveUserRecipe = useMutation((data: DeleteUserRecipeRequirements) => deleteUserRecipe(data), {
    onSuccess: () => {
      queryClient.invalidateQueries([USER_RECIPES_QUERY_KEY]);
      toast.success(t('Recipe deleted'));
    },
    onError: () => {
      toast.error(t('Service is currently not available'));
    },
  });

  return { addRecipeToUserLiked, deleteRecipeFromUserLiked, updateUserRecipe, archiveUserRecipe };
};
