import { useEffect, useState } from 'react';

import { Recipe as RecipeType } from '@api/types';
import { DEFAULT_PAGINATION } from '@config/constants';
import { useTranslation } from '@hooks/index';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { Box, Recipe, Typography } from '@ui/index';
import { PaginationType } from '@utils/resolvePaginatedResponse';
import { useDebounce } from '@utils/useDebounce';
import { useUrlParams } from '@utils/useUrlParams';

import { NoRecipesFound } from './components/NoRecipesFound';
import { Pagination } from './components/Pagination';
import { RecipesSkeleton } from './components/RecipesSkeleton';
import { MyRecipe } from '@pages/DashboardPanel/MyRecipes/MyRecipe';

type Props = {
  data: RecipeType[];
  pagination?: PaginationType;
  isSuccess: boolean;
  isLoading: boolean;
  type: 'recipesList' | 'myRecipes';
  header: JSX.Element;
};

export const RecipesListGrid = ({ data, pagination, isSuccess, isLoading, type, header }: Props) => {
  const { t } = useTranslation();
  const [pageNumberFromUrl, setPageToUrl] = useUrlParams('page');
  const initialPage =
    pageNumberFromUrl && Number(pageNumberFromUrl) > 0 ? Number(pageNumberFromUrl) : DEFAULT_PAGINATION.page;
  const [page, setPage] = useState<number>(initialPage);
  const debouncedPage = useDebounce(page, 300);

  useEffect(() => {
    if (pagination?.page) {
      setPage(pagination.page);
    }
  }, [pagination?.page]);

  useEffect(() => {
    setPageToUrl(debouncedPage.toString());
  }, [debouncedPage]);

  const isData = isSuccess && data.length > 0;
  const isPaginationVisible = isLoading || isData;

  return (
    <>
      {header}
      <Box display="flex" justifyContent="space-between" alignContent="center" marginTop="20px" marginBottom="20px">
        <Typography variant="h5">
          {t('Recipes')} ({pagination?.total ?? 'Loading..'})
        </Typography>
        <Pagination pages={pagination?.pages} page={page} setPage={setPage} />
      </Box>
      {isLoading && <RecipesSkeleton limit={DEFAULT_PAGINATION.limit} />}
      {!isData && <NoRecipesFound />}
      {isData && (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          {data.map((recipe) => (
            <Grid sm={12} md={6} lg={4} key={recipe.id}>
              {type === 'recipesList' ? (
                <Recipe {...recipe} key={recipe.id} />
              ) : (
                <MyRecipe {...recipe} key={recipe.id} />
              )}
            </Grid>
          ))}
        </Grid>
      )}
      {isPaginationVisible && (
        <Box display="flex" justifyContent="flex-end" alignContent="center" marginTop="20px" marginBottom="20px">
          <Pagination pages={pagination?.pages} page={page} setPage={setPage} />
        </Box>
      )}
    </>
  );
};
