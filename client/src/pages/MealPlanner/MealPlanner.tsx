import { WeekSelect } from '@components/index';
import { styled } from '@mui/material';
import { Button, Box } from '@ui/index';

import { DayRow } from './DayRow';

export const EditButton = styled(Button)(({ theme }) => ({
  paddingRight: 20,
  paddingLeft: 20,
  textTransform: 'none',
  border: '2px solid',
  borderColor: theme.palette.primary.main,
}));

const Options = styled(Box)({
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  width: '100%',
  marginBottom: 10,
  gap: 10,
});

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '] as const;

export const MealPlanner = () => {
  return (
    <>
      <Options>
        <EditButton>Edytuj</EditButton>
        <WeekSelect />
      </Options>
      {weekDays.map((day) => (
        <DayRow day={day} />
      ))}
    </>
  );
};
