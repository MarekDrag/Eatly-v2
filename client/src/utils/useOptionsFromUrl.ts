import { useLocation } from 'react-router-dom';

export type Options = {
  search?: string;
  pagination?: {
    page: number;
    limit: number;
  };
};

export const useOptionsFromUrl = (): Options => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const options: Options = {};

  const searchParam = queryParams.get('search');
  const pageParam = queryParams.get('page');
  const limitParam = queryParams.get('limit');

  if (searchParam) {
    options.search = searchParam;
  }

  if (pageParam && limitParam) {
    options.pagination = {
      page: Number(pageParam),
      limit: Number(limitParam),
    };
  }

  return options;
};
