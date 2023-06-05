import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 4fr',
  gap: 10,
  marginLeft: '10%',
  marginRight: '10%',
  [theme.breakpoints.down('lg')]: {
    marginLeft: 0,
    marginRight: 0,
  },
}));
