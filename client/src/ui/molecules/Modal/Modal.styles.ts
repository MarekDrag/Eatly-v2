import { styled } from '@mui/material';
import { Button } from '@ui/index';

export const CancelButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: theme.palette.background.paper,
}));
