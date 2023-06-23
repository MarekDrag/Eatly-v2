import { Accordion, styled } from '@mui/material';
import { Box, Typography } from '@ui/index';

export const Wrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexWrap: 'wrap',
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 50,
  marginBottom: 30,
  fontWeight: 500,
  color: theme.palette.primary.main,
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  border: 'none',
  borderTop: 'none',
  width: '70%',
  [theme.breakpoints.down('xl')]: {
    width: '100%',
  },
}));
