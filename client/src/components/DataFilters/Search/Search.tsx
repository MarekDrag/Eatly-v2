import { useTranslation } from '@hooks/index';
import { Clear } from '@mui/icons-material';
import { Autocomplete, styled, TextField } from '@mui/material';

const StyledSearch = styled(Autocomplete)(({ theme }) => ({
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

const Icon = styled(Clear)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));

export const Search = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledSearch
        id="search"
        options={[]}
        freeSolo
        clearIcon={<Icon />}
        renderInput={(params) => <TextField {...params} label={`${t('Search')}...`} />}
      />
    </>
  );
};
