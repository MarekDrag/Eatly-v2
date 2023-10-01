import { styled } from '@mui/material';
import { Box } from '@ui/index';

export const Title = styled(Box)({
  width: '100%',
  padding: 10,
  marginBottom: 50,
});

export const Row = styled(Box)({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  gap: 50,
  marginBottom: 50,
  justifyContent: 'center',
  alignItems: 'center',
});

export const IconWithNumber = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: 5,
});
