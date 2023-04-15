import { useState } from 'react';

import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { CardActions, Checkbox, styled } from '@mui/material';

const Icon = styled(FavoriteBorder)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

const CheckedIcon = styled(Favorite)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

export const FavoriteButton = () => {
  const [state, setState] = useState(false);

  return (
    <CardActions onClick={() => setState((prev) => !prev)}>
      <Checkbox icon={<Icon />} checkedIcon={<CheckedIcon />} disableRipple />
    </CardActions>
  );
};
