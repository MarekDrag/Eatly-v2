import { BoxProps, Box as MuiBox, styled } from '@mui/material';

const StyledBox = styled(MuiBox)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Box = (props: BoxProps) => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};
