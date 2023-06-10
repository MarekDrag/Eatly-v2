import { styled, Box } from '@mui/material';
import { Button, Paper } from '@ui/index';

export const RecipeDetailsWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 5,
  rowGap: 5,
});

export const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

export const StyledPaper = styled(Paper)({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
});

export const BackButton = styled(Button)(({ theme }) => ({
  marginBottom: 10,
  textTransform: 'none',
  border: '2px solid',
  borderColor: theme.palette.primary.main,
}));
