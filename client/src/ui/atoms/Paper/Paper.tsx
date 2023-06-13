import { BoxProps, Box, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  padding: 20,
}));

export const Paper = (props: BoxProps) => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};
