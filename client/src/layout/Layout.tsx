import { useContext } from 'react';

import { Box, styled } from '@mui/material';
import { Router } from '@routes/router';

import { DrawerContext } from './DrawerContext';
import { Nav } from './Nav';
import { DrawerNav } from './SideNav';

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
  width: '100%',
  padding: 20,
});

export const Layout = () => {
  const { drawerOpen } = useContext(DrawerContext);

  return (
    <LayoutWrapper>
      <Nav />
      <DrawerNav />
      <Board marginLeft={drawerOpen ? '250px' : '80px'}>
        <Router />
      </Board>
    </LayoutWrapper>
  );
};
