export type PaginationOptions = {
  page: number;
  limit: number;
};

export type FilterOptions = {
  key: string;
  values: string[];
};

export type Options = {
  pagination?: PaginationOptions;
  search?: string;
  filters?: FilterOptions;
};
export type QueryParamsOptions = Partial<PaginationOptions> & Partial<FilterOptions> & { search?: string };
