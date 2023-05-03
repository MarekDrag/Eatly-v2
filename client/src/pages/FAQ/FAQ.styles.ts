import { Accordion, Typography, styled } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 50,
  marginBottom: 30,
  fontWeight: 700,
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
