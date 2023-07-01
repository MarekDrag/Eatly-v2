export class Pagination<T> {
  constructor(
    public readonly items: T[],
    public readonly pagination: {
      total: number;
      pages: number;
      page: number;
      limit: number;
    },
  ) {}
}
