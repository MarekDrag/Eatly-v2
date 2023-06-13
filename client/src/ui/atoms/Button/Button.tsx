import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  justifyContent: 'flex-start',
  borderRadius: 5,
  color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.main,
  background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
  textTransform: 'none',
}));

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
