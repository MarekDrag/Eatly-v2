import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { DataFilters } from '@components/index';
import { icons } from '@config/icons';
import { Skeleton, Unstable_Grid2 as Grid, Box } from '@mui/material';

import { AddRecipeButton, HeaderActionsBox } from './Cookbook.styles';
import { Recipe } from './Recipe';
import { data } from './data';

export const Cookbook = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 100);

  return (
    <>
      <HeaderActionsBox>
        <DataFilters />
        <Box width="100%" display="flex" justifyContent="end">
          <AddRecipeButton endIcon={icons.plus} onClick={() => navigate('/dashboard/new-recipe')}>
            Add Recipe
          </AddRecipeButton>
        </Box>
      </HeaderActionsBox>
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
