import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
  background: theme.palette.background.paper,
  boxShadow: '0px 0px 10px -5px rgba(0, 0, 0, 0.5)',
  '&:hover': {
    background: theme.palette.background.paper,
  },
  '&:active': {
    background: theme.palette.action.hover,
  },
}));

export const UserName = styled(Typography)({
  minWidth: 30,
  textTransform: 'none',
});

export const ArrowIcon = styled(KeyboardArrowDownIcon)(({ theme }) => ({
  padding: 5,
  color: theme.palette.text.primary,
}));

export const Dropdown = styled(Box)(({ theme }) => ({
  position: 'absolute',
  flexWrap: 'wrap',
  width: 130,
  height: 70,
  padding: 5,
  marginTop: 150,
  borderRadius: 10,
  background: theme.palette.background.paper,
  boxShadow: '0px 0px 14px -6px rgba(0, 0, 0, 0.5)',
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
}));
