type Props = {
  url: string;
  pagination: {
    page: number;
    limit: number;
  };
};

export const providePaginationToUrl = ({ url, pagination }: Props): string => {
  if (url.includes('?')) {
    url += `&page=${pagination.page}&limit=${pagination.limit}`;
  } else {
    url += `?page=${pagination.page}&limit=${pagination.limit}`;
  }
  return url;
};
