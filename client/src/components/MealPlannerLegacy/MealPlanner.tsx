import { Recipe } from '@components/Recipe';
import { WeekSelect } from '@components/WeekSelect';
import { Box, Typography, styled } from '@mui/material';
import { data } from '@pages/DashboardPanel/Recipes/data';
import { Paper } from '@ui/Paper';
import { BarChart, PieChartIndicator } from '@ui/charts';

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
const nutritionsNames = ['Calories', 'Fats', 'Carbs', 'Protein'] as const;

export const Wrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: 5,
  width: '100%',
});

const recipeData = data[0];
export const MealPlanner = () => {
  return (
    <Wrapper>
      <Paper>
        <Typography variant="h5" color="text.disabled" width="100%">
          Plan your week
        </Typography>
        <Typography variant="h3" color="text.primary" width="100%" marginTop="10px">
          Meal planner
        </Typography>
        <Typography variant="subtitle1" color="text.disabled" width="100%">
          Current week: 12 March 2023 - 19 March 2023
        </Typography>
        <Typography variant="h6" color="text.disabled" width="100%" marginTop="10px">
          Last week kcal/day
        </Typography>
        <BarChart />
      </Paper>
      <Paper alignContent="center" justifyContent="space-around">
        <Typography variant="h4" color="text.primary" width="100%" marginBottom="20px" textAlign="center">
          Nutritions Today
        </Typography>
        {nutritionsNames.map((nutrition) => {
          return (
            <Box>
              <Typography variant="h5" color="text.secondary" marginBottom="20px" textAlign="center">
                {nutrition}: good
              </Typography>
              <PieChartIndicator />
              <Typography variant="subtitle1" color="text.disabled" marginTop="10px" textAlign="center">
                Goal: 2100
              </Typography>
            </Box>
          );
        })}
      </Paper>
      <Paper>
        <WeekSelect iconSize="large" height="100px" width="100%" justifyContent="center" />
      </Paper>
      <Paper alignContent="center" flexWrap="nowrap">
        {weekDays.map((day) => {
          return (
            <Box>
              <Typography variant="h6" color="text.secondary" textAlign="center">
                12
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" textAlign="center">
                {day}
              </Typography>
            </Box>
          );
        })}
      </Paper>
      <Recipe {...recipeData} />
    </Wrapper>
  );
};
