import { useEffect, useState } from 'react';

import { useRecipesQuery } from '@api/recipes';
import { DEFAULT_PAGINATION } from '@config/constants';
import { useTranslation } from '@hooks/index';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { Box, DataFilters, Recipe, Typography } from '@ui/index';
import { useOptionsFromUrl } from '@utils/useOptionsFromUrl';

import { Pagination } from './Pagination/Pagination';
import { RecipesSkeleton } from './RecipesSkeleton';

export const Recipes = () => {
  const { t } = useTranslation();
  const options = useOptionsFromUrl();
  const { data, isLoading } = useRecipesQuery(options);
  const [page, setPage] = useState(options.pagination?.page || DEFAULT_PAGINATION.page);

  useEffect(() => {
    if (data?.pagination.page) {
      console.log(data.pagination);
      setPage(data.pagination.page);
    }
  }, [data?.pagination.page]);

  return (
    <>
      <DataFilters />
      <Box display="flex" justifyContent="space-between" alignContent="center" marginTop="20px" marginBottom="20px">
        <Typography variant="h5">
          {t('Recipes')} ({data?.pagination.total ?? 0})
        </Typography>
        <Pagination pages={data?.pagination.pages} limit={DEFAULT_PAGINATION.limit} page={page} setPage={setPage} />
      </Box>
      {isLoading && <RecipesSkeleton limit={DEFAULT_PAGINATION.limit} />}
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
        <Pagination pages={data?.pagination.pages} limit={DEFAULT_PAGINATION.limit} page={page} setPage={setPage} />
      </Box>
    </>
  );
};
