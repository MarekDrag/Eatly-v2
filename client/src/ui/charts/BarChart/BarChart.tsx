import { BarChart as Chart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Box } from '@mui/material';

const data = [
  {
    name: 'Mon',
    calories: 4000,
    amt: 2400,
  },
  {
    name: 'Tues',
    calories: 3000,
    amt: 2210,
  },
  {
    name: 'Wed',
    calories: 2000,
    amt: 2290,
  },
  {
    name: 'Thurs',
    calories: 2780,
    amt: 2000,
  },
  {
    name: 'Fri',
    calories: 1890,
    amt: 2181,
  },
  {
    name: 'Sat',
    calories: 2390,
    amt: 2500,
  },
  {
    name: 'Sun',
    calories: 3490,
    amt: 2100,
  },
];

export const BarChart = () => {
  return (
    <Box width="100%" height="200px" display="flex" justifyContent="center">
      <ResponsiveContainer width="100%" height="100%">
        <Chart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="calories" fill="#46B299" />
        </Chart>
      </ResponsiveContainer>
    </Box>
  );
};
