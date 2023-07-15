import { Options } from '@types';

type Props = {
  items: any[];
  totalCount: { total: number }[];
  limit: number;
  options: Options;
};

export const resolvePaginatedItems = (props: Props) => {
  const { items, totalCount, limit, options } = props;
  const total = Number(totalCount[0].total);
  const pages = Math.ceil(total / limit);

  const isPageNumberReset = !!options.search || !!options.filters;
  const pageNumber = Number(options.page) > pages ? pages : Number(options.page);

  return {
    items,
    pagination: {
      total,
      pages,
      page: isPageNumberReset ? 1 : pageNumber,
      limit,
    },
  };
};
