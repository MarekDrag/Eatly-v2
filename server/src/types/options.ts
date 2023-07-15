type TypeFilter = {
  type?: string;
};
type MealFilter = {
  meal?: string;
};

export type FilterOptions = TypeFilter & MealFilter;

export type Options = {
  page?: number;
  search?: string;
  filters?: FilterOptions;
};

export type QueryParamsOptions = Partial<FilterOptions> & { search?: string; page?: number };
