import { Box, Checkbox, Typography, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',
  padding: 20,
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export const ShoppingListWrapper = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
});

export const BoldText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: 10,
  fontWeight: 500,
  color: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.primary.contrastText,
}));

export const Text = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.primary.contrastText,
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  background: `${theme.palette.background.paper} !important`,
  '&:hover': {
    background: `${theme.palette.action.hover} !important`,
  },
}));
