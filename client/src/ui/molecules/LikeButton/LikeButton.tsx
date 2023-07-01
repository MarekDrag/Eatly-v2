import { useState } from 'react';

import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { CardActions, Checkbox, CheckboxProps, styled } from '@mui/material';

const Icon = styled(FavoriteBorder)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

const CheckedIcon = styled(Favorite)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

type Props = CheckboxProps & {
  id: string;
};

export const LikeButton = ({ id, ...props }: Props) => {
  const [state, setState] = useState(false);

  return (
    <CardActions onClick={() => setState((prev) => !prev)}>
      <Checkbox id={`like-button-${id}`} icon={<Icon />} checkedIcon={<CheckedIcon />} disableRipple {...props} />
    </CardActions>
  );
};
