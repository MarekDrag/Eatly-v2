import { Box, styled } from '@mui/material';

import { Nav } from './Nav';
import { SideNav } from './SideNav';

type LayoutProps = {
  board: JSX.Element;
};

const LayoutWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  background: theme.palette.background.default,
}));

const Board = styled(Box)(({ theme }) => ({
  height: '100%',
  minHeight: '100vh',
  width: '100%',
  marginLeft: 250,
  padding: 20,
  overflowY: 'auto',
  [theme.breakpoints.down('lg')]: {
    marginLeft: '20%',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: 80,
  },
}));

export const Layout = ({ board }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Nav />
      <SideNav />
      <Board>{board}</Board>
    </LayoutWrapper>
  );
};
