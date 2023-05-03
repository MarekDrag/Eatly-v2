import { Search } from '@components/DataFilters';
import { Box } from '@mui/material';

import { StyledDrawer, Title } from './Drawer.styles';
import { TabSelect } from './TabSelect/TabSelect';

type Props = {
  isOpen: boolean;
};

export const ResponsiveDrawer = ({ isOpen }: Props) => {
  return (
    <>
      {isOpen && (
        <Box sx={{ display: 'flex' }}>
          <StyledDrawer variant="permanent">
            <Title>Tryb edycji</Title>
            <Search />
            <TabSelect />
          </StyledDrawer>
        </Box>
      )}
    </>
  );
};
