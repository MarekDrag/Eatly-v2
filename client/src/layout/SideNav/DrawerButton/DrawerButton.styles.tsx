import { styled } from '@mui/material';
import { Button } from '@ui/index';

export const StyledButton = styled(Button)(({ theme }) => ({
  width: '90%',
  height: 40,
  paddingLeft: 30,
  borderRadius: 5,
  color: theme.palette.text.secondary,
  background: 'none',
  textTransform: 'none',
}));
