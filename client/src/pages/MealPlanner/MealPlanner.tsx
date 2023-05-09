import { useState } from 'react';

import { WeekSelect } from '@components/index';

import { DayRow } from './DayRow';
import { ResponsiveDrawer } from './Drawer/Drawer';
import { EditButton, Options } from './MealPlanner.styles';

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '] as const;

export const MealPlanner = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      <ResponsiveDrawer isOpen={isEdit} />
      <Options>
        <EditButton onClick={handleEdit}>Edytuj</EditButton>
        <WeekSelect iconSize="medium" />
      </Options>
      {weekDays.map((day) => (
        <DayRow day={day} />
      ))}
    </>
  );
};
