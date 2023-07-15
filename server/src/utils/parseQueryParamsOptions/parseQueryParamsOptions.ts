import { QueryParamsOptions } from '@types';

export const parseQueryParamsOptions = (options: QueryParamsOptions, possibleFiltersKeys: string[]) => {
  const filtersKeys = Object.keys(options).filter((key) => possibleFiltersKeys.includes(key) && options[key]);

  const filters = filtersKeys.map((key) => ({ [key]: options[key].split(',') }));
  const page = options.page && options.page > 0 ? options.page : 1;

  return {
    search: options.search,
    page: Number(page),
    ...(filters.length > 0 ? { filters: Object.assign({}, ...filters) } : []),
  };
};
