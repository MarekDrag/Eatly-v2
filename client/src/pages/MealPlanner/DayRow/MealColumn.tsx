import { MealBox, MealTitle, MealWrapper, Text, Image, AddButton } from './DayRow.styles';

type Props = {
  mealType: string;
  name?: string;
  calories?: number;
  href?: string;
};

export const MealColumn = ({ mealType, name, calories, href }: Props) => {
  const isMeal = !!(name && calories && href);

  return (
    <MealWrapper>
      <MealTitle>{mealType}</MealTitle>
      {isMeal ? (
        <MealBox>
          <Text>{name}</Text>
          <Text>Kal: {calories}</Text>
          <Image src={href} alt={name} />
        </MealBox>
      ) : (
        <AddButton sx={{ marginLeft: 4 }}></AddButton>
      )}
    </MealWrapper>
  );
};
