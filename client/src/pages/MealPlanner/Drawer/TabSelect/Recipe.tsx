import { MealBox, Text, Image } from './Recipe.styles';

export const Recipe = () => {
  return (
    <MealBox>
      <Text>Pizza peperoni</Text>
      <Text>Kal: 340</Text>
      <Image
        src="https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg"
        alt="Pizza peperoni"
      />
    </MealBox>
  );
};
