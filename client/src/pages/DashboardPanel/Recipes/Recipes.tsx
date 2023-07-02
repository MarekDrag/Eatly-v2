import { useState } from 'react';

import { useRecipesQuery } from '@api/recipes';
import { useTranslation } from '@hooks/index';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { Box, DataFilters, Recipe, Typography } from '@ui/index';

import { Pagination } from './Pagination/Pagination';
import { useCurrentPageNumber } from './Pagination/useCurrentPageNumber';
import { RecipesSkeleton } from './RecipesSkeleton';

const defaultPagination = {
  page: 1,
  limit: 50,
};

export const Recipes = () => {
  const { t } = useTranslation();
  const currentPage = useCurrentPageNumber();
  const [page, setPage] = useState(currentPage);
  const { data, isLoading } = useRecipesQuery({
    pagination: { ...defaultPagination, page: currentPage },
  });

  return (
    <>
      <DataFilters />
      <Box display="flex" justifyContent="space-between" alignContent="center" marginTop="20px" marginBottom="20px">
        <Typography variant="h5">
          {t('Recipes')} ({data?.pagination.total ?? 50})
        </Typography>
        <Pagination pages={data?.pagination.pages} limit={defaultPagination.limit} page={page} setPage={setPage} />
      </Box>
      {isLoading && <RecipesSkeleton limit={defaultPagination.limit} />}
      {!isLoading && !!data && (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          {data.data.map((recipe) => {
            return (
              <Grid xs={12} lg={4} xl={3} key={recipe.id}>
                {!isLoading && <Recipe {...recipe} key={recipe.id} />}
              </Grid>
            );
          })}
        </Grid>
      )}
      <Box display="flex" justifyContent="flex-end" alignContent="center" marginTop="20px" marginBottom="20px">
        <Pagination pages={data?.pagination.pages} limit={defaultPagination.limit} page={page} setPage={setPage} />
      </Box>
    </>
  );
};
