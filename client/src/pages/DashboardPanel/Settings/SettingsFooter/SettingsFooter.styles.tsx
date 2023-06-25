import { styled } from '@mui/material';
import { Button } from '@ui/index';

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
