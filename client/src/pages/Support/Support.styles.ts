import { Typography, styled, TextField as MuiTextField } from '@mui/material';
import { Box, Button, Select } from '@ui/index';

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 50,
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

export const StyledSelect = styled(Select)({
  width: 300,
});

export const Label = styled(Typography)(({ theme }) => ({
  width: '100%',
  fontSize: 20,
  marginBottom: 10,
  marginTop: 20,
  color: theme.palette.text.primary,
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  background: theme.palette.background.paper,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '70%',
  minWidth: 300,
  marginTop: 20,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const SendButton = styled(Button)(({ theme }) => ({
  border: '2px solid',
  borderColor: theme.palette.primary.main,
}));
