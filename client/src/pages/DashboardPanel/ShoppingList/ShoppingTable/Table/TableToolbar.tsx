import { Tooltip, Toolbar, styled } from '@mui/material';

import { BoldText } from '../../ShoppingList.styles';
import { IconButton, Typography } from '@ui/index';

const StyledTooltip = styled(Tooltip)(({ theme }) => ({
  marginLeft: '95%',
  position: 'absolute',
  background: `${theme.palette.background.paper} !important`,
  '&:hover': {
    background: `${theme.palette.action.hover} !important`,
  },
  '&:active': {
    background: `${theme.palette.action.active} !important`,
  },
}));

export const TableToolbar = ({ numSelected }: { numSelected: number }) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        width: '100%',
      }}
    >
      <BoldText sx={{ width: 300 }} variant="h5">
        Lista zakupów
      </BoldText>
      {numSelected > 0 && (
        <Typography variant="subtitle1" sx={{ marginLeft: '80%', position: 'absolute' }} fontWeight={500}>
          Usuń z listy {numSelected} elementy
        </Typography>
      )}
      {numSelected > 0 ? (
        <StyledTooltip title="Delete">
          <IconButton disableRipple name="delete" />
        </StyledTooltip>
      ) : (
        <StyledTooltip title="Filter list">
          <IconButton disableRipple name="filter" />
        </StyledTooltip>
      )}
    </Toolbar>
  );
};
