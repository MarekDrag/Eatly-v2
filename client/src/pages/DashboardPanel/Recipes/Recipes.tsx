import { useRecipesQuery } from '@api/recipes';
import { RecipesListGrid } from '@ui/templates';

import { useLocation } from 'react-router-dom';

export const Recipes = () => {
  const { search } = useLocation();
  const { data, isLoading, isSuccess } = useRecipesQuery(search);

  return (
    <RecipesListGrid
      isLoading={isLoading}
      isSuccess={isSuccess}
      data={data?.data ?? []}
      pagination={data?.pagination}
      type="recipesList"
    />
  );
};
