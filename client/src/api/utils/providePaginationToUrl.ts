type Props = {
  url: string;
  pagination?: {
    page: number;
    limit: number;
  };
};

const addPaginationToUrl = (url: string, page: number, limit: number) => {
  if (url.includes('?')) {
    url += `&page=${page}&limit=${limit}`;
  } else {
    url += `?page=${page}&limit=${limit}`;
  }

  return url;
};

export const providePaginationToUrl = ({ url, pagination }: Props) => {
  const previousPage = new URLSearchParams(location.search).get('page');
  const previousLimit = new URLSearchParams(location.search).get('limit');

  if (pagination && previousPage && previousLimit) {
    return url.replace(
      `page=${previousPage}&limit=${previousLimit}`,
      `page=${pagination.page}&limit=${pagination.limit}`,
    );
  }

  if (pagination && !previousPage && !previousLimit) {
    return addPaginationToUrl(url, pagination.page, pagination.limit);
  }

  return '';
};
