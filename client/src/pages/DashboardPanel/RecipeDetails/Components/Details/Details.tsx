import { icons } from '@config/index';
import { useTranslation } from '@hooks/index';
import { Rating, Typography } from '@ui/index';

import { Row, IconWithNumber, Title } from './Details.styles';

type Props = {
  name: string;
  calories: number;
  ratingValue: number;
  reviewsNumber: number;
  cookingTime: number;
  persons: number;
  description: string;
};

export const Details = ({ name, calories, ratingValue, reviewsNumber, cookingTime, persons, description }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Title>
        <Typography variant="h3" textAlign="center" color="text.primary">
          {name}
        </Typography>
      </Title>
      <Row>
        <Rating value={ratingValue} reviewsNumber={reviewsNumber} size="small" />
        <Typography variant="body1" fontWeight={500} color="text.primary">
          {t('calories')}: {calories}
        </Typography>
        <IconWithNumber color="text.primary">
          {icons.clock}
          <Typography variant="body1" fontWeight={500} color="text.primary">
            {cookingTime}
          </Typography>
        </IconWithNumber>
        <IconWithNumber color="text.primary">
          {icons.person}
          <Typography variant="body1" fontWeight={500} color="text.primary">
            {persons}
          </Typography>
        </IconWithNumber>
      </Row>
      <Typography variant="body1" color="text.primary">
        {description}
      </Typography>
    </>
  );
};
