import { Typography, styled } from '@mui/material';
import { Box, Select } from '@ui/index';

export const StyledSelect = styled(Select)({
  width: 300,
});

export const Label = styled(Typography)(({ theme }) => ({
  width: 300,
  fontSize: 20,
  marginBottom: 10,
  marginTop: 20,
  color: theme.palette.text.primary,
}));

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '70%',
  minWidth: 300,
  marginTop: 20,
});
