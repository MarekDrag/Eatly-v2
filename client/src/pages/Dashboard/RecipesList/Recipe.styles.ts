import { Box, Typography, styled } from '@mui/material';

export const RecipesWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  overflowX: 'auto',
  padding: 20,
  gap: 20,
  borderRadius: 5,
  background: theme.palette.background.default,
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: 0,
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 20,
    background: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
  },
  '&::-webkit-scrollbar-track': {
    height: 10,
  },
}));

export const Recipe = styled(Box)(({ theme }) => ({
  padding: 10,
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  borderRadius: 5,
  cursor: 'grab',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.01)',
  },
}));

export const Image = styled('img')(({ theme }) => ({
  width: '50%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

export const Text = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: 2,
  color: theme.palette.text.secondary,
}));
