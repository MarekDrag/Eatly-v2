import { styled } from '@mui/material';
import { Button, Box } from '@ui/index';

export const EditButton = styled(Button)(({ theme }) => ({
  paddingRight: 20,
  paddingLeft: 20,
  textTransform: 'none',
  border: '2px solid',
  borderColor: theme.palette.primary.main,
}));

export const Options = styled(Box)({
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  width: '100%',
  marginBottom: 10,
  gap: 10,
});
