import { Box } from '@mui/material';

import { weekDays } from '../constants';
import { Meals } from './Meals';
import { Nutrients } from './Nutrients';
import { DayName, PlannerWrapper, StyledPaper } from './Planner.styles';

export const Planner = () => {
  return (
    <StyledPaper>
      <PlannerWrapper>
        {weekDays.map((weekDay) => {
          return (
            <Box>
              <DayName>{weekDay}</DayName>
              <Nutrients />
              <Meals />
            </Box>
          );
        })}
      </PlannerWrapper>
    </StyledPaper>
  );
};
