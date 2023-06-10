import { useState } from 'react';

import { IngredientSelect } from '@components/DataFilters/Selects/IngredientSelect';
import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { FormControl, InputAdornment, OutlinedInput, Typography, styled } from '@mui/material';
import { Button } from '@ui/index';

import { data } from './data';

const List = styled('ul')({
  width: '100%',
});

type IngredientType = {
  amount: number;
  measure: string;
  name: string;
};

export const Ingredients = () => {
  const { t } = useTranslation();
  const [ingredients, setIngredients] = useState<IngredientType[]>(data);

  const handleAddIngredient = () => {};

  return (
    <>
      <Typography variant="h5" fontWeight="500" color="text.primary">
        {t('Ingredients')}
      </Typography>
      <IngredientSelect />
      <FormControl variant="outlined">
        <OutlinedInput type="number" endAdornment={<InputAdornment position="end">kg</InputAdornment>} />
      </FormControl>
      <Button endIcon={icons.plus} sx={{ display: 'flex', justifyContent: 'center' }}>
        Add ingredient
      </Button>
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
    </>
  );
};
