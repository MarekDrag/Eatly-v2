import { styled } from '@mui/material';
import { Box, Button } from '@ui/index';

export const Background = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  minHeight: '100vh',
  height: '100%',
  background: 'linear-gradient(to right, #189f80, #33b699, #66ccaf, #99e3c0)',
});

export const LoginBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'start',
  flexWrap: 'wrap',
  width: 400,
  rowGap: 20,
  padding: 20,
  borderRadius: 20,
  color: '#fff',
  background: '#fff',
  marginTop: 30,
  marginBottom: 50,
});

export const SendButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: '#fff',
  textAlign: 'center',
}));
