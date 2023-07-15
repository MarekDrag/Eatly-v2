import { Clear } from '@mui/icons-material';
import { Autocomplete, styled } from '@mui/material';

export const StyledSearch = styled(Autocomplete)(({ theme }) => ({
  minWidth: 200,
  background: theme.palette.background.paper,
  borderRadius: 5,
  button: {
    '&:hover': {
      background: theme.palette.background.default,
    },
    '&:active': {
      background: theme.palette.action.active,
    },
  },
  [theme.breakpoints.only('sm')]: {
    width: '100%',
  },
}));

export const ClearIcon = styled(Clear)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));
