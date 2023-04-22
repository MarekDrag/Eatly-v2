import { styled, Box } from '@mui/material';
import { Button } from '@ui/index';

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

export const RecipeDetailsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  width: 'calc(100% - 20)',
  padding: 10,
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export const BackButton = styled(Button)(({ theme }) => ({
  marginBottom: 10,
  textTransform: 'none',
  border: '2px solid',
  borderColor: theme.palette.primary.main,
}));
