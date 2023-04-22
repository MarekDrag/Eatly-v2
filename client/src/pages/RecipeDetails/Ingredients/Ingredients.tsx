import { Typography, styled } from '@mui/material';

import { RecipeDetailsBox } from '../RecipeDetails.styles';

const List = styled('ul')({
  width: '100%',
});

type Props = {
  ingredients: {
    amount: number;
    measure: string;
    name: string;
  }[];
};

export const Ingredients = ({ ingredients }: Props) => {
  return (
    <RecipeDetailsBox>
      <Typography variant="h5" fontWeight="500" color="text.primary">
        Składniki
      </Typography>
      <List>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name} color="text.primary">
            <Typography
              variant="body1"
              color="text.primary"
            >{`${ingredient.name} ${ingredient.amount} ${ingredient.measure}`}</Typography>
          </li>
        ))}
      </List>
    </RecipeDetailsBox>
  );
};
