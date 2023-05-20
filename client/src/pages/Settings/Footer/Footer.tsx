import { Box, styled } from '@mui/material';
import { Button } from '@ui/index';

const CancelButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: theme.palette.background.paper,
  border: '1px solid',
  borderColor: theme.palette.primary.main,
  marginLeft: 20,
  paddingLeft: 20,
  paddingRight: 20,
}));

const SaveButton = styled(Button)(({ theme }) => ({
  paddingLeft: 20,
  paddingRight: 20,
  background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    opacity: 0.7,
    background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
  },
}));

export const Footer = () => {
  return (
    <Box width="100%" marginTop="50px">
      <SaveButton>Save Changes</SaveButton>
      <CancelButton sx={{ marginLeft: '20px' }}>Cancel</CancelButton>
    </Box>
  );
};
