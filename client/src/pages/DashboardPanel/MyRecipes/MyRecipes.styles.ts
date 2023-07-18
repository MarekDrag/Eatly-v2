import { styled } from '@mui/material';
import { Button, Box } from '@ui/index';

export const AddRecipeButton = styled(Button)(({ theme }) => ({
  width: '150px',
  height: '55px',
  justifyContent: 'center',
  [theme.breakpoints.only('sm')]: {
    width: '100%',
    marginBottom: 10,
  },
}));

export const HeaderActionsBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '80% 20%',
  [theme.breakpoints.only('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));
