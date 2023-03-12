import { Button as MuiButton, styled } from '@mui/material';

export const Button = styled(MuiButton)({
  width: 220,
  height: 50,
  color: '#fff',
  justifyContent: 'flex-start',
  paddingLeft: 30,
  disableRipple: true,
  '&:hover': {
    background: '#189F7F',
  },
  '&:active': {
    paddingLeft: 50,
  },
});
