type Props = {
  url: string;
  search?: string;
};

const addSearchToUrl = (url: string, search: string) => {
  if (url.includes('?')) {
    url += `&search=${search}`;
  } else {
    url += `?search=${search}`;
  }
  return url;
};

const removeSearchFromUrl = (url: string, previousSearch: string) => {
  const encodedSearch = encodeURIComponent(previousSearch);
  if (url.includes('?search=')) {
    return url.replace(`?search=${encodedSearch}`, '');
  } else {
    return url.replace(`&search=${encodedSearch}`, '');
  }
};

export const provideSearchToUrl = ({ url, search }: Props): string => {
  const previousSearch = new URLSearchParams(location.search).get('search');
  let urlWithModifiedPagination = url;

  if (!search && previousSearch) {
    return removeSearchFromUrl(urlWithModifiedPagination, previousSearch);
  }

  if (previousSearch && search) {
    const regex = new RegExp(`search=${encodeURIComponent(previousSearch)}`, 'i');
    const encodedSearch = encodeURIComponent(search);
    return urlWithModifiedPagination.replace(regex, `search=${encodedSearch}`);
  }

  if (search) {
    return addSearchToUrl(urlWithModifiedPagination, search);
  }

  return urlWithModifiedPagination;
};
