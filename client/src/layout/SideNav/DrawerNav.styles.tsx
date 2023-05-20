import { Box, Drawer, Divider as MuiDivider, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    alignItems: 'center',
    gap: 10,
    border: 'none',
    boxShadow: theme.shadows[1],
    padding: 0,
    background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  justifyContent: 'center',
  alignContent: 'flex-start',
  height: 'calc(100vh - 80px)',
  width: '100%',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: 0,
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 20,
    background: theme.palette.primary.light,
  },
}));

export const Divider = styled(MuiDivider)({
  color: 'rgba(255,255,255, 0.54)',
  width: '80%',
});

export const BackIconBox = styled(Box)({
  position: 'absolute',
  right: 2,
  top: 2,
});
