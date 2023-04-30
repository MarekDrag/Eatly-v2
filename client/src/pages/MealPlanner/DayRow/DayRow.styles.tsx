import { Typography, styled } from '@mui/material';
import { Box } from '@ui/index';

export const DayBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: 10,
  height: 300,
}));

export const RotatedText = styled(Typography)(({ theme }) => ({
  height: 300,
  padding: 5,
  fontSize: 20,
  writingMode: 'vertical-rl',
  textOrientation: 'sideways',
  transform: 'rotate(180deg)',
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

export const MealsContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  alignContent: 'flex-start',
  width: '100%',
  height: '100%',
});

export const MealWrapper = styled(Box)(({ theme }) => ({
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  borderLeft: '1px solid',
  borderColor: theme.palette.text.disabled,
  height: 300,
}));

export const MealTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderBottom: '1px solid',
  width: '100%',
  textAlign: 'center',
  borderColor: theme.palette.text.disabled,
  fontWeight: 500,
  padding: 5,
  fontSize: 20,
}));

export const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

export const MealBox = styled(Box)(({ theme }) => ({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '50%',
  padding: 10,
  rowGap: 10,
  boxShadow: theme.shadows[3],
  borderRadius: 5,
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.01)',
    background: theme.palette.action.active,
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
}));
