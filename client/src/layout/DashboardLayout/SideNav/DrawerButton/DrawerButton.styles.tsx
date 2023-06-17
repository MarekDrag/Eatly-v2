import { styled } from '@mui/material';
import { Button } from '@ui/index';

export const StyledButton = styled(Button)(({ theme }) => ({
  width: '90%',
  height: 40,
  paddingLeft: 30,
  borderRadius: 5,
  color: theme.palette.primary.contrastText,
  background: 'none',
  textTransform: 'none',
  justifyContent: 'flex-start',
  '&:hover': {
    background: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
    opacity: 0.8,
  },
}));
