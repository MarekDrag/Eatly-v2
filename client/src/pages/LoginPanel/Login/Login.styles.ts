import { Link, styled } from '@mui/material';
import { Typography, Button } from '@ui/index';

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
