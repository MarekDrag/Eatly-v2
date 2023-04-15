import { Clear } from '@mui/icons-material';
import { Autocomplete, styled, TextField } from '@mui/material';

const StyledSearch = styled(Autocomplete)(({ theme }) => ({
  minWidth: 200,
  background: theme.palette.background.paper,
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

const Icon = styled(Clear)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));

export const Search = () => {
  return (
    <StyledSearch
      id="search"
      options={[]}
      freeSolo
      clearIcon={<Icon />}
      renderInput={(params) => <TextField {...params} label="Search..." />}
    />
  );
};
