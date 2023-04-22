import { Box, Typography, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export const ShoppingList = () => {
  return (
    <StyledBox>
      <Typography></Typography>
    </StyledBox>
  );
};
