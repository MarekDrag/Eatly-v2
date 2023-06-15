import { useContext } from 'react';

import { styled } from '@mui/material';
import { DashboardRoutes } from '@routes/DashboardRoutes';
import { DrawerContext } from '@contexts/DrawerContext';

import { Nav } from './Nav';
import { DrawerNav } from './SideNav';
import { Box } from '@ui/index';

const LayoutWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  background: theme.palette.background.default,
}));

const Board = styled(Box)({
  height: '100%',
  padding: 20,
});

export const DashboardLayout = () => {
  const { drawerOpen } = useContext(DrawerContext);

  return (
    <LayoutWrapper>
      <Nav />
      <DrawerNav />
      <Board
        marginLeft={drawerOpen ? '250px' : '80px'}
        width={drawerOpen ? 'calc(100vw - 310px)' : 'calc(100vw - 140px)'}
      >
        <DashboardRoutes />
      </Board>
    </LayoutWrapper>
  );
};
