import { Divider as MuiDivider, styled } from '@mui/material';
import { Button as UIButton, Box } from '@ui/index';

export const Wrapper = styled(Box)(({ theme }) => ({
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  position: 'fixed',
  height: '100%',
  maxWidth: '250px',
  width: '20%',
  gap: '1rem',
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
}));

export const Button = styled(UIButton)(({ theme }) => ({
  justifyContent: 'flex-start',
  width: 220,
  height: 50,
  paddingLeft: 30,
  borderRadius: 20,
  color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.main,
}));

export const Divider = styled(MuiDivider)({
  color: 'rgba(255,255,255, 0.54)',
  width: '80%',
});
