import { DividerProps, Divider as MuiDivider } from '@mui/material';

export const Divider = (props: DividerProps) => {
  return <MuiDivider sx={{ color: '#aeb2b1', width: '100%' }} {...props} />;
};
