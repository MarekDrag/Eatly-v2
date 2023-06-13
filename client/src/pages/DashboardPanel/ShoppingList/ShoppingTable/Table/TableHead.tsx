import { TableSortLabel, TableRow, TableHead as MUITableHead, TableCell } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { Data, EnhancedTableProps, TableHeaders } from '../types';
import { StyledCheckbox } from '../../ShoppingList.styles';
import { Box } from '@ui/index';

const tableHeaders: TableHeaders = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: true,
    label: 'Amount',
  },
  {
    id: 'measure',
    numeric: false,
    disablePadding: true,
    label: 'Measure',
  },
];

export const TableHead = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}: EnhancedTableProps) => {
  const createSortHandler = (newOrderBy: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, newOrderBy);
  };

  return (
    <MUITableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <StyledCheckbox
            disableRipple
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {tableHeaders.map((headCell) => (
          <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </MUITableHead>
  );
};
