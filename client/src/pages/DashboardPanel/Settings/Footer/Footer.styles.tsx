import { styled } from '@mui/material';
import { Button } from '@ui/index';

export const CancelButton = styled(Button)(({ theme }) => ({
  marginLeft: 20,
  paddingLeft: 20,
  paddingRight: 20,
  color: theme.palette.primary.main,
  background: theme.palette.background.paper,
}));

export const SaveButton = styled(Button)(({ theme }) => ({
  paddingLeft: 20,
  paddingRight: 20,
  background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    opacity: 0.7,
    background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
  },
}));
