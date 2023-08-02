import { useLocation, useNavigate } from 'react-router-dom';

import { useMeQuery } from '@api/me';
import { useUserRecipesQuery } from '@api/recipes/hooks/useUserRecipesQuery';
import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { DataFilters, RecipesListGrid, Box } from '@ui/index';

import { AddRecipeButton, HeaderActionsBox } from './MyRecipes.styles';

export const MyRecipes = () => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const navigate = useNavigate();

  const me = useMeQuery();
  const { data, isLoading, isSuccess } = useUserRecipesQuery({
    params: search,
    userId: me.data?.id || '',
    isEnabled: !!me.data?.id,
  });

  const header = (
    <HeaderActionsBox>
      <DataFilters />
      <Box width="100%" display="flex" justifyContent="end">
        <AddRecipeButton endIcon={icons.plus} onClick={() => navigate('/dashboard/new-recipe')}>
          {t('Add Recipe')}
        </AddRecipeButton>
      </Box>
    </HeaderActionsBox>
  );

  return (
    <>
      <RecipesListGrid
        isLoading={isLoading}
        isSuccess={isSuccess}
        data={data?.data ?? []}
        pagination={data?.pagination}
        type="myRecipes"
        header={header}
      />
    </>
  );
};
