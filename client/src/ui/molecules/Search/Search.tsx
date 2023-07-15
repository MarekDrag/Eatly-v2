import { ChangeEvent, useEffect, useState } from 'react';

import { useTranslation } from '@hooks/index';
import { TextField } from '@ui/atoms';

import { ClearIcon, StyledSearch } from './Search.styles';
import { useUrlParams } from '@utils/useUrlParams';
import { useDebounce } from '@utils/useDebounce';

export const Search = () => {
  const { t } = useTranslation();
  const [searchFromUrl, setSearchToUrl] = useUrlParams('search');
  const [searchText, setSearchText] = useState(searchFromUrl ?? '');
  const debouncedSearch = useDebounce(searchText, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    setSearchToUrl(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <>
      <StyledSearch
        id="search"
        options={[]}
        freeSolo
        clearIcon={<ClearIcon onClick={() => setSearchText('')} />}
        defaultValue={searchFromUrl}
        renderInput={(params) => (
          <TextField {...params} label={`${t('Search')}...`} value={searchText} onChange={handleChange} />
        )}
      />
    </>
  );
};
