import { Typography } from '@mui/material';
import { BarChart, Paper } from '@ui/index';

export const Dashboard = () => {
  return (
    <Paper>
      <Typography variant="subtitle1" color="text.disabled" width="100%">
        Current week: 12 March 2023 - 19 March 2023
      </Typography>
      <Typography variant="h6" color="text.disabled" width="100%" marginTop="10px">
        Last week kcal/day
      </Typography>
      <BarChart />
    </Paper>
  );
};
