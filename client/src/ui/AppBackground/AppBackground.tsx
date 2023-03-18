import { styled } from '@mui/material';

export const Background = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  background: theme.palette.background.default,
}));
