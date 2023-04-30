import { Dispatch, SetStateAction } from 'react';

import { TableRow, TableCell, TableBody as MuiTableBody, styled } from '@mui/material';
import { StyledCheckbox } from '@pages/ShoppingList/ShoppingList.styles';

import { Data } from '../types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  background: theme.palette.background.paper,
}));

type Props = {
  visibleRows: Data[] | null;
  setSelected: Dispatch<SetStateAction<readonly string[]>>;
  page: number;
  rowsPerPage: number;
  rows: Data[];
  selected: readonly string[];
};

export const TableBody = ({ visibleRows, page, rowsPerPage, rows, selected, setSelected }: Props) => {
  const isSelected = (name: string) => selected.indexOf(name) !== -1;
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleClick = (name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  return (
    <MuiTableBody>
      {!!visibleRows &&
        visibleRows.map((row) => {
          const isItemSelected = isSelected(row.id);

          return (
            <TableRow
              hover
              onClick={() => handleClick(row.id)}
              role="checkbox"
              tabIndex={-1}
              key={row.id}
              selected={isItemSelected}
              sx={{ cursor: 'pointer', background: '#fff' }}
            >
              <StyledTableCell padding="checkbox">
                <StyledCheckbox disableRipple checked={isItemSelected} />
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.amount}</StyledTableCell>
              <StyledTableCell>{row.measure}</StyledTableCell>
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 53 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </MuiTableBody>
  );
};
