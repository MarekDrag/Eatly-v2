import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { cx, cy, iR, oR } from './constants';
import { indicator } from './utils';
import { Box } from '@ui/atoms';

const data = [
  { value: 2100, color: '#FFC675' },
  { value: 2000, color: '#27CE88' },
  { value: 1900, color: '#2499EF' },
];

const value = 1900;

export const PieChartIndicator = () => {
  return (
    <Box width="210px" height="110px" display="flex" justifyContent="center">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            stroke="none"
          >
            {data.map((entry) => (
              <Cell key={`cell-${entry.color}`} fill={entry.color} />
            ))}
          </Pie>
          {indicator({ value, data })}
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};
