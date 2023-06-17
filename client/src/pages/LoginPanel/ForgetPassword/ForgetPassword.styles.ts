import { styled } from '@mui/material';
import { Button } from '@ui/index';

export const SendButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: '#fff',
}));
