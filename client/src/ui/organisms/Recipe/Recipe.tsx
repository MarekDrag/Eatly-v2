import { useNavigate } from 'react-router-dom';

import { CardContent, styled, Card, CardMedia } from '@mui/material';
import { Typography } from '@ui/atoms';
import { LikeButton, Rating } from '@ui/molecules';

const RecipeWrapper = styled(Card)({
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.01)',
  },
});

type Props = {
  id: string;
  imgUrl: string | null;
  name: string;
  ratingValue: number;
  reviewsNumber: number;
  time: number;
  description: string;
};

export const Recipe = (props: Props) => {
  const navigate = useNavigate();

  const description = props.description.length > 120 ? `${props.description.slice(0, 120)}...` : props.description;

  return (
    <RecipeWrapper sx={{ width: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image={props.imgUrl || ''}
        alt={props.name}
        onClick={() => navigate(`/dashboard/recipes/${props.id}`)}
      />
      <CardContent onClick={() => navigate(`/dashboard/recipes/${props.id}`)}>
        <Typography gutterBottom variant="h5">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" height="80px">
          {description}
        </Typography>
        <Rating value={props.ratingValue} reviewsNumber={props.reviewsNumber} size="medium" readOnly={true} />
      </CardContent>
      <LikeButton id={props.id} />
    </RecipeWrapper>
  );
};
