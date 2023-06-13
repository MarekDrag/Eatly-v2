import { styled } from '@mui/material';
import { Paper, Box, Typography } from '@ui/index';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === 'light' ? '#e6e6e6' : ' #3d3d3d',
  boxShadow: 'none',
}));

export const PlannerWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: 20,
  width: '100%',
});

export const DayName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: 10,
}));
