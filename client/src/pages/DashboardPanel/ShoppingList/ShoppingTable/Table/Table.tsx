import { useState, useEffect, useCallback, ChangeEvent } from 'react';

import { TablePagination, TableContainer, Table as MUITable } from '@mui/material';

import { data } from '../../data';
import { Order, Data } from '../types';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import { TableToolbar } from './TableToolbar';
import { DEFAULT_ORDER, DEFAULT_ORDER_BY, DEFAULT_ROWS_PER_PAGE } from './constants';
import { getComparator, stableSort } from './utils';

const rows = data;

export const Table = () => {
  const [order, setOrder] = useState<Order>(DEFAULT_ORDER);
  const [orderBy, setOrderBy] = useState<keyof Data>(DEFAULT_ORDER_BY);
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [visibleRows, setVisibleRows] = useState<Data[] | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);

  useEffect(() => {
    let rowsOnMount = stableSort(rows, getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY));
    rowsOnMount = rowsOnMount.slice(0 * DEFAULT_ROWS_PER_PAGE, 0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE);

    setVisibleRows(rowsOnMount);
  }, []);

  const handleRequestSort = useCallback(
    (newOrderBy: keyof Data) => {
      const isAsc = orderBy === newOrderBy && order === 'asc';
      const toggledOrder = isAsc ? 'desc' : 'asc';
      setOrder(toggledOrder);
      setOrderBy(newOrderBy);

      const sortedRows = stableSort(rows, getComparator(toggledOrder, newOrderBy));
      const updatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
      setVisibleRows(updatedRows);
    },
    [order, orderBy, page, rowsPerPage],
  );

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = useCallback(
    (newPage: number) => {
      setPage(newPage);
      const sortedRows = stableSort(rows, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage);
      setVisibleRows(updatedRows);
    },
    [order, orderBy, rowsPerPage],
  );

  const handleChangeRowsPerPage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const updatedRowsPerPage = parseInt(event.target.value, 10);
      setRowsPerPage(updatedRowsPerPage);
      setPage(0);

      const sortedRows = stableSort(rows, getComparator(order, orderBy)).slice(0, updatedRowsPerPage);
      setVisibleRows(sortedRows);
    },
    [order, orderBy],
  );

  return (
    <>
      <TableToolbar numSelected={selected.length} />
      <TableContainer>
        <MUITable sx={{ minWidth: 750 }} size={'medium'}>
          <TableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={(_, newOrderBy) => handleRequestSort(newOrderBy)}
            rowCount={rows.length}
          />
          <TableBody
            visibleRows={visibleRows}
            setSelected={setSelected}
            page={page}
            rowsPerPage={rowsPerPage}
            rows={rows}
            selected={selected}
          />
        </MUITable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, page) => handleChangePage(page)}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ width: '100%' }}
      />
    </>
  );
};
