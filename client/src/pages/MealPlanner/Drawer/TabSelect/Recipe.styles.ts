import { Box, Typography, styled } from '@mui/material';

export const MealBox = styled(Box)(({ theme }) => ({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '30%',
  padding: 10,
  marginBottom: 10,
  boxShadow: theme.shadows[2],
  background: theme.palette.background.paper,
  borderRadius: 5,
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.01)',
  },
}));

export const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
}));
