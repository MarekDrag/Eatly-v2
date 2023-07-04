import { ChangeEvent, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { provideSearchToUrl } from '@api/utils/provideSearchToUrl';
import { useTranslation } from '@hooks/index';
import { Clear } from '@mui/icons-material';
import { Autocomplete, styled } from '@mui/material';
import { TextField } from '@ui/atoms';

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
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value);

  useEffect(() => {
    const urlWithSearch = provideSearchToUrl({ url: location.search, search: searchText });
    navigate(urlWithSearch);
  }, [searchText]);

  return (
    <>
      <StyledSearch
        id="search"
        options={[]}
        freeSolo
        clearIcon={<Icon onClick={() => setSearchText('')} />}
        renderInput={(params) => (
          <TextField {...params} label={`${t('Search')}...`} value={searchText} onChange={handleChange} />
        )}
      />
    </>
  );
};
