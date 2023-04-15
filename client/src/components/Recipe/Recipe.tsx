import { CardContent, CardMedia, Typography, styled, Card } from '@mui/material';

import { FavoriteButton } from './FavoriteButton';
import { Rating } from './Rating';

const RecipeWrapper = styled(Card)({
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.01)',
  },
});

type Props = {
  img: string;
  name: string;
  ratingValue: number;
  reviewsNumber: number;
  time: number;
  description: string;
};

export const Recipe = (props: Props) => {
  return (
    <RecipeWrapper>
      <CardMedia component="img" height="200" image={props.img} alt={props.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${props.description.slice(0, 120)}...`}
        </Typography>
        <Rating ratingValue={props.ratingValue} reviewsNumber={props.reviewsNumber} />
      </CardContent>
      <FavoriteButton />
    </RecipeWrapper>
  );
};
