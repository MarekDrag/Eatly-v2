import { DayBox, MealsContainer, RotatedText } from './DayRow.styles';
import { MealColumn } from './MealColumn';

type Props = {
  day: string;
};

export const meals = ['Breakfast', 'Lunch', 'Dinner'] as const;

export const DayRow = ({ day }: Props) => {
  return (
    <DayBox>
      <RotatedText>{day}</RotatedText>
      <MealsContainer>
        {meals.map((meal) => (
          <MealColumn mealType={meal} />
        ))}
      </MealsContainer>
    </DayBox>
  );
};
