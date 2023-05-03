import { Box, Tabs, Tab, styled } from '@mui/material';

export const StyledTab = styled(Tab)({
  width: '30%',
});

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.primary.main,
  },
}));

export const MealsContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  width: '100%',
  marginTop: 10,
});
