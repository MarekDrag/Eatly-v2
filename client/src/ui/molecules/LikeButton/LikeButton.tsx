import { ChangeEvent, useState } from 'react';

import { useRecipeMutation } from '@api/recipes';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { CardActions, Checkbox, CheckboxProps, styled } from '@mui/material';

const Icon = styled(FavoriteBorder)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

const CheckedIcon = styled(Favorite)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

type Props = CheckboxProps & {
  recipeId: string;
  isLiked: boolean;
};

export const LikeButton = ({ recipeId, isLiked, ...props }: Props) => {
  const [liked, setLiked] = useState(isLiked);
  const { addRecipeToUserLiked, deleteRecipeFromUserLiked } = useRecipeMutation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      addRecipeToUserLiked.mutate({ recipeId });
    } else {
      deleteRecipeFromUserLiked.mutate({ recipeId });
    }
    setLiked(event.target.checked);
  };

  return (
    <CardActions>
      <Checkbox
        icon={<Icon />}
        checkedIcon={<CheckedIcon />}
        disableRipple
        checked={liked}
        onChange={(e) => handleChange(e)}
        {...props}
      />
    </CardActions>
  );
};
