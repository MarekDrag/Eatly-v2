import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { data } from '@pages/DashboardPanel/MealPlanner/Planner/Meals/data';

import { meals } from '../../constants';
import { MealBox, Text, Image } from './Meals.styles';
import { Typography } from '@ui/index';

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
