import { useTranslation } from '@hooks/index';
import { Typography, styled } from '@mui/material';

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
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h5" fontWeight="500" color="text.primary">
        {t('Ingredients')}
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
    </>
  );
};
