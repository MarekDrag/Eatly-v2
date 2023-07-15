import { AxiosResponse } from 'axios';

export type PaginationType = {
  total: number;
  pages: number;
  limit: number;
  page: number;
};

export type PaginatedResponseType<T> = {
  items: T[];
  pagination: PaginationType;
};

export type ResolvedResponse<T> = {
  data: T[];
  pagination: PaginationType;
};

export const resolvePaginatedResponse = <T>(response: AxiosResponse<PaginatedResponseType<T>>): ResolvedResponse<T> => {
  const { pagination, items } = response.data;

  return {
    data: items,
    pagination,
  };
};
