import { useLocation } from 'react-router-dom';

import { useRecipesQuery } from '@api/recipes';
import { DataFilters } from '@ui/organisms';
import { RecipesListGrid } from '@ui/templates';

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
      header={<DataFilters />}
    />
  );
};
