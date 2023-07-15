import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Pagination as MuiPagination } from '@mui/material';

type Props = {
  pages?: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({ pages, page, setPage }: Props) => {
  const [pagesTotal, setPagesTotal] = useState(1);

  useEffect(() => {
    if (typeof pages === 'number') {
      setPagesTotal(pages > 0 ? pages : 1);
    }
  }, [pages]);

  return (
    <MuiPagination
      size="large"
      count={pagesTotal}
      page={page}
      onChange={(_, value) => setPage(value)}
      shape="rounded"
    />
  );
};
