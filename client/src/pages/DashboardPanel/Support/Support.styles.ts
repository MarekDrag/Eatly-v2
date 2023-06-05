import { Typography, styled } from '@mui/material';
import { Box, Button, Paper } from '@ui/index';

export const Wrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const Row = styled(Box)(({ theme }) => ({
  width: '60%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('xl')]: {
    width: '100%',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 50,
  fontWeight: 500,
  color: theme.palette.primary.main,
  width: '100%',
  textAlign: 'center',
}));

export const Label = styled(Typography)(({ theme }) => ({
  width: '100%',
  fontSize: 20,
  marginBottom: 10,
  marginTop: 20,
  color: theme.palette.text.primary,
}));

export const SendButton = styled(Button)(({ theme }) => ({
  border: '2px solid',
  borderColor: theme.palette.primary.main,
}));
