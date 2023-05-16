import { icons } from '@config/icons';
import { Typography } from '@mui/material';
import { meals } from '@pages/MealPlanner/constants';
import { data } from '@pages/RecipeDetails/data';

import { MealBox, Text, Image } from './Meals.styles';

const props = data;

export const Meals = () => {
  return (
    <>
      {meals.map((meal) => (
        <MealBox>
          <Text width="50%" variant="subtitle2">
            {'Breakfast'.toLocaleUpperCase()}
          </Text>
          <Text variant="subtitle2" display="flex" justifyContent="flex-end" width="50%">
            {icons.clock}
            {props.time}m
          </Text>
          <Typography width="100%" color="text.primary">
            {props.name}
          </Typography>
          <Image src={props.img} alt={props.name} />
        </MealBox>
      ))}
    </>
  );
};
