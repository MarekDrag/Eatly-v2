import { Box, Typography, styled } from '@mui/material';
import { Button } from '@ui/index';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',
  height: '100%',
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export const ArrowButton = styled(Button)(({ theme }) => ({
  justifyContent: 'center',
  color: theme.palette.primary.main,
  background: 'none',
  '&:hover': {
    background: 'none',
  },
  '&:active': {
    background: 'none',
  },
}));

export const BoldText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: 10,
  fontWeight: 500,
  color: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.primary.contrastText,
}));

export const Text = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.primary.contrastText,
}));
