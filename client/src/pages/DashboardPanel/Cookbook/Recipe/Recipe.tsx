import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { icons } from '@config/icons';
import {
  CardContent,
  CardMedia,
  Typography,
  styled,
  Card,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Chip,
} from '@mui/material';
import { Rating } from '@ui/index';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <RecipeWrapper sx={{ width: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image={props.img}
        alt={props.name}
        onClick={() => navigate('/dashboard/recipes/:1')}
      />
      <CardHeader
        action={<IconButton onClick={handleClick}>{icons.actions}</IconButton>}
        title={props.name}
        subheader="September 14, 2016"
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Public</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
      <CardContent
        onClick={() => navigate('/dashboard/1recipes/:1')}
        sx={{ display: 'grid', gridTemplateColumns: '80% 1fr' }}
      >
        <Rating value={props.ratingValue} reviewsNumber={props.reviewsNumber} size="medium" readOnly={true} />{' '}
        <Chip label="Private" color="secondary" />
        <Chip label="Public" color="primary" />
      </CardContent>
    </RecipeWrapper>
  );
};
