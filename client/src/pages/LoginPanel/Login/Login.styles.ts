import { Link, styled } from '@mui/material';
import { Typography, Box, Button } from '@ui/index';

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
  justifyContent: 'center',
  color: '#fff',
}));

export const ForgetPassword = styled(Link)(({ theme }) => ({
  width: '100%',
  alignSelf: 'center',
  textAlign: 'right',
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontWeight: 500,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 500,
}));

export const asdasd = styled(Button)({
  background: '#fff',
  color: '#000',
  textTransform: 'none',
  border: '1px solid  #aeb2b1',
});
export const SendButasdton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: '#fff',
}));

export const SocialasdButton = styled(Button)({
  background: '#fff',
  color: '#000',
  textTransform: 'none',
  border: '1px solid  #aeb2b1',
});
