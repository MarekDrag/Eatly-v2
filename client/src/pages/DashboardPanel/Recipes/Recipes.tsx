import { useState } from 'react';

import { Skeleton, Unstable_Grid2 as Grid } from '@mui/material';

import { data } from './data';
import { DataFilters, Recipe } from '@ui/index';

export const Recipes = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
      <DataFilters />
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {data.map((recipe) => {
          return (
            <Grid xs={12} lg={4} xl={3}>
              {!isLoading && <Recipe {...recipe} key={recipe.name} />}
              {isLoading && <Skeleton variant="rounded" height={340} animation="pulse" />}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
