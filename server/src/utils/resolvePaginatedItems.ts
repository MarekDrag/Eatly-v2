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

  const isPageNumberReset = !!options.search || !!options.filters;

  return {
    items,
    pagination: {
      total,
      pages: Math.ceil(total / limit),
      page: isPageNumberReset ? 1 : Number(options.page),
      limit,
    },
  };
};
