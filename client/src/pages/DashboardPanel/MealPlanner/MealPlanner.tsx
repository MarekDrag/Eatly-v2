import { useTranslation } from '@hooks/index';

import { Planner } from './Planner/Planner';
import { RecipesList } from './RecipesList';
import { WeekSelect, DataFilters, Paper, Box, Typography } from '@ui/index';

export const MealPlanner = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box display="flex" gap="10px" width="100%" marginBottom="20px">
        <Paper alignContent="space-around">
          <Typography variant="h4" fontWeight={500} color="text.primary" marginBottom="10px">
            {t('My weekly Meal plan')}
          </Typography>
          <WeekSelect iconSize="large" />
        </Paper>
        <Paper width="60%">
          <DataFilters />
          <RecipesList />
        </Paper>
      </Box>
      <Planner />
    </>
  );
};
