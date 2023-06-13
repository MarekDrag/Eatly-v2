import { styled } from '@mui/material';
import { Box, Typography } from '@ui/index';

export const Calories = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: '100%',
  textAlign: 'center',
  fontWeight: 700,
}));

export const StyledGridBox = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  width: '100%',
  marginTop: 5,
});

export const NutritionNumber = styled(Typography)({
  width: '100%',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: 14,
});

export const NutritionName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  width: '100%',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: 10,
}));
