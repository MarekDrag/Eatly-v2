import { styled } from '@mui/material';
import { Box, Typography } from '@ui/index';

export const Image = styled('img')(({ theme }) => ({
  width: '50%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

export const MealBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: 15,
  rowGap: 10,
  boxShadow: theme.shadows[3],
  background: theme.palette.background.paper,
  marginTop: 10,
  borderRadius: 5,
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.01)',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
  width: '50%',
}));
