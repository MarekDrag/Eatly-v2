import { styled } from '@mui/material';
import { Box, Typography } from '@ui/index';

export const StyledStep = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[2],
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 50px',
  padding: 10,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledContent = styled(Typography)(({ theme }) => ({
  width: '100%',
  wordBreak: 'break-word',
  color: theme.palette.text.primary,
}));
