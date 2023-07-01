import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { providePaginationToUrl } from '@api/utils';
import { Pagination as MuiPagination } from '@mui/material';

type Props = {
  pages?: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({ pages, limit, page, setPage }: Props) => {
  const [pagesTotal, setPagesTotal] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const urlWithPagination = providePaginationToUrl({ url: location.pathname, pagination: { page, limit } });
    navigate(urlWithPagination);
  }, [page]);

  useEffect(() => {
    if (pages) {
      setPagesTotal(pages);
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
