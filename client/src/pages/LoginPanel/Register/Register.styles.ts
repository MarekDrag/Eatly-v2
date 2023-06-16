import { styled } from '@mui/material';
import { Button, Typography } from '@ui/index';

export const SectionTitle = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 500,
}));

export const SendButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.light,
  justifyContent: 'center',
  color: '#fff',
}));
