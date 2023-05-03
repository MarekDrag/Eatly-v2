import { Accordion, Typography, styled } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 50,
  marginBottom: 40,
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

export const StyledAccordion = styled(Accordion)({
  boxShadow: 'none',
  border: 'none',
  borderTop: 'none',
});
