import { RatingProps } from '@mui/material';
import { Typography } from '@ui/index';

import { RatingWrapper, StyledRating, EmptyIcon } from './Rating.styles';

type Props = {
  reviewsNumber: number;
} & RatingProps;

export const Rating = ({ reviewsNumber, ...props }: Props) => {
  return (
    <RatingWrapper color="text.secondary">
      <StyledRating precision={0.5} emptyIcon={<EmptyIcon fontSize={'inherit'} />} {...props} />
      <Typography variant="body1" marginLeft={1}>
        ({reviewsNumber})
      </Typography>
    </RatingWrapper>
  );
};
