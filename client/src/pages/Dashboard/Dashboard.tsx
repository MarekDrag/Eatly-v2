import { Box, Typography, styled } from '@mui/material';
import { BarChart, Paper } from '@ui/index';

import { RecipesList } from './RecipesList';

export const Wrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 10,
  width: '100%',
});

export const Dashboard = () => {
  return (
    <Wrapper>
      <Paper>
        <Typography variant="subtitle1" color="text.disabled" width="100%">
          Current week 12 March 2023 - 19 March 2023
        </Typography>
        <Typography variant="h6" color="text.secondary" width="100%">
          Meals planned today
        </Typography>
        <RecipesList />
      </Paper>
      <Paper>
        <Typography variant="h6" color="text.disabled" width="100%" marginTop="10px" marginBottom="20px">
          Last week kcal/day
        </Typography>
        <BarChart />
      </Paper>
    </Wrapper>
  );
};
