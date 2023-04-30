import { DayBox, MealWrapper, MealTitle, MealsContainer, RotatedText } from './DayRow.styles';

type Props = {
  day: string;
};

export const Meals = ['Breakfast', 'Lunch', 'Dinner'] as const;

export const DayRow = ({ day }: Props) => {
  return (
    <DayBox>
      <RotatedText>{day}</RotatedText>
      <MealsContainer>
        <MealWrapper>
          <MealTitle>Lunch</MealTitle>
        </MealWrapper>
        <MealWrapper>
          <MealTitle>Dinner</MealTitle>
        </MealWrapper>
      </MealsContainer>
    </DayBox>
  );
};
