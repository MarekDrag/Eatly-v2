import { useTranslation } from '@hooks/index';
import { Box } from '@mui/material';

import { weekDays } from '../constants';
import { Meals } from './Meals';
import { Nutrients } from './Nutrients';
import { DayName, PlannerWrapper, StyledPaper } from './Planner.styles';

export const Planner = () => {
  const { t } = useTranslation();

  return (
    <StyledPaper>
      <PlannerWrapper>
        {weekDays.map((weekDay) => {
          return (
            <Box>
              <DayName>{t(weekDay)}</DayName>
              <Nutrients />
              <Meals />
            </Box>
          );
        })}
      </PlannerWrapper>
    </StyledPaper>
  );
};
