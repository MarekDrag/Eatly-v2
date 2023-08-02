import { Card, styled } from '@mui/material';

export const RecipeWrapper = styled(Card)({
  cursor: 'pointer',
  width: '100%',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.01)',
  },
});
