import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { Typography } from '@mui/material';
import { meals } from '@pages/MealPlanner/constants';
import { data } from '@pages/RecipeDetails/data';

import { MealBox, Text, Image } from './Meals.styles';

const props = data;

export const Meals = () => {
  const { t } = useTranslation();

  return (
    <>
      {meals.map((meal) => (
        <MealBox>
          <Text width="50%" variant="subtitle2">
            {t(meal).toLocaleUpperCase()}
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
