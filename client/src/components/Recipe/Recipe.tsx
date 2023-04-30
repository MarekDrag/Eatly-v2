import { useNavigate } from 'react-router-dom';

import { CardContent, CardMedia, Typography, styled, Card } from '@mui/material';
import { Rating, LikeButton } from '@ui/index';

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
  const navigate = useNavigate();

  return (
    <RecipeWrapper sx={{ width: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image={props.img}
        alt={props.name}
        onClick={() => navigate('/recipes/:1')}
      />
      <CardContent onClick={() => navigate('/recipes/:1')}>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${props.description.slice(0, 120)}...`}
        </Typography>
        <Rating value={props.ratingValue} reviewsNumber={props.reviewsNumber} size="medium" readOnly={true} />
      </CardContent>
      <LikeButton />
    </RecipeWrapper>
  );
};
