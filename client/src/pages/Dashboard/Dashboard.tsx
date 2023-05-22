import { useTranslation } from '@hooks/index';
import { Box, Typography, styled } from '@mui/material';
import { Meals } from '@pages/MealPlanner/Planner/Meals';
import { BarChart, Paper } from '@ui/index';

export const Wrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 10,
});

export const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Paper>
        <Typography variant="subtitle1" color="text.secondary" width="100%">
          {t('Current week')} 12 March 2023 - 19 March 2023
        </Typography>
        <Typography variant="h6" color="text.disabled" width="100%">
          {t('Today')}
        </Typography>
        <Box width="100%" gap="20px" padding="10px" height="200px" display="flex">
          <Meals />
        </Box>
      </Paper>
      <Paper>
        <Typography variant="h6" color="text.disabled" width="100%" marginTop="10px" marginBottom="20px">
          {t('Last week kcal/day')}
        </Typography>
        <BarChart />
      </Paper>
    </Wrapper>
  );
};
