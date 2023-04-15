import { Checkbox, FormControl, MenuItem, styled } from '@mui/material';

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  background: `${theme.palette.background.paper} !important`,
  '&:hover': {
    background: `${theme.palette.action.hover} !important`,
  },
}));

export const Wrapper = styled(FormControl)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  textTransform: 'none',
  minWidth: 200,
  height: 56,
  [theme.breakpoints.only('sm')]: {
    width: '100%',
  },
}));

export const StyledCheckbox = styled(Checkbox)({
  '&:hover': {
    background: 'none',
  },
});
