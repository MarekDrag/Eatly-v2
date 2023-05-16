import { Box, Typography, styled } from '@mui/material';
import { Button } from '@ui/index';

export const StyledBox = styled(Box)({
  display: 'flex',
  alignContent: 'center',
});

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

export const Text = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
});
