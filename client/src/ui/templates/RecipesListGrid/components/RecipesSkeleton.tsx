import { Skeleton } from '@mui/material';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { memo } from 'react';

type Props = {
  limit: number;
};

export const RecipesSkeleton = memo(({ limit }: Props) => {
  const array = new Array(limit).fill('');

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
      {array.map((_, index) => (
        <Grid xs={12} lg={4} xl={3} key={index}>
          <Skeleton variant="rounded" height={340} animation="pulse" key={index} />
        </Grid>
      ))}
    </Grid>
  );
});
