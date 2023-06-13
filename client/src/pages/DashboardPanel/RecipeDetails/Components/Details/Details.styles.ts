import { styled } from '@mui/material';
import { Box } from '@ui/index';

export const Title = styled(Box)({
  width: '100%',
  padding: 10,
  marginBottom: 20,
});

export const Row = styled(Box)({
  width: '100%',
  flexWrap: 'wrap',
  gap: 50,
  marginBottom: 20,
});

export const IconWithNumber = styled(Box)({
  justifyContent: 'space-around',
  gap: 5,
});
