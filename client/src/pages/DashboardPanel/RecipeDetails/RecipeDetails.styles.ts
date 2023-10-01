import { styled } from '@mui/material';
import { Button, Box, Paper } from '@ui/index';

export const StyledPaper = styled(Paper)({
  display: 'flex',
  justifyContent: 'start',
});

export const RecipeDetailsWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 20,
  padding: '0 100px',
  [theme.breakpoints.down('xl')]: {
    gridTemplateColumns: '1fr',
    padding: 0,
  },
}));

export const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

export const StyledBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
});

export const BackButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  border: '2px solid',
  borderColor: theme.palette.primary.main,
  transition: '0.3s ease-out',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.light : '',
  },
}));
