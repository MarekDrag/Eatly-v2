import { MealBox, MealTitle, MealWrapper, Text, Image } from './DayRow.styles';

export const MealColumn = () => {
  return (
    <MealWrapper>
      <MealTitle>Breakfast</MealTitle>
      <MealBox>
        <Text>Pizza pepperoni</Text>
        <Text>Kal: 300</Text>
        <Image
          src="https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg"
          alt="pizza"
        />
      </MealBox>
    </MealWrapper>
  );
};
