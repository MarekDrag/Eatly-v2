export type Order = 'asc' | 'desc';

export type EnhancedTableProps = {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, newOrderBy: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
};

export type Data = {
  id: string;
  name: string;
  amount: number;
  measure: string;
};

export type TableHeaders = {
  id: keyof Data;
  label: string;
  disablePadding: boolean;
  numeric: boolean;
}[];
