import { KeyboardArrowDown } from '@mui/icons-material';
import { styled, Typography } from '@mui/material';
import { Box, Button } from '@ui/index';

export const Wrapper = styled(Box)({
  justifyContent: 'flex-end',
  marginRight: 30,
});

export const UserProfile = styled(Button)(({ theme }) => ({
  alignItems: 'center',
  height: 60,
  minWidth: 140,
  borderRadius: 10,
  color: theme.palette.text.primary,
  background: theme.palette.mode === 'light' ? theme.palette.background.paper : '#414141',
  boxShadow: theme.shadows[1],
  '&:hover': {
    background: theme.palette.action.active,
  },
}));

export const UserName = styled(Typography)({
  minWidth: 30,
  textTransform: 'none',
});

export const ArrowIcon = styled(KeyboardArrowDown)({
  padding: 5,
  transition: 'transform 0.2s ease',
});

export const Dropdown = styled(Box)(({ theme }) => ({
  position: 'absolute',
  flexWrap: 'wrap',
  width: 130,
  height: 70,
  padding: 5,
  marginTop: 150,
  borderRadius: 10,
  background: theme.palette.mode === 'light' ? theme.palette.background.paper : '#414141',
  boxShadow: theme.shadows[1],
  zIndex: 100,
}));

export const DropdownButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  width: '95%',
  height: 30,
  borderRadius: 10,
  paddingLeft: 15,
  color: theme.palette.text.primary,
  background: theme.palette.background.default,
  textTransform: 'none',
  '&:hover': {
    background: theme.palette.action.hover,
  },
}));
