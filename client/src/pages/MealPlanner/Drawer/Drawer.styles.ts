import { Drawer, styled, Typography } from '@mui/material';

export const Title = styled(Typography)({
  textAlign: 'center',
  padding: 10,
  fontSize: 30,
  fontWeight: 500,
});

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: 250,
    background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
    color: '#fff',
    borderRadius: 5,
    gap: 10,
    padding: 10,
  },
}));
