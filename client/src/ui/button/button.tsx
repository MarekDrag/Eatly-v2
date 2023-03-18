import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  '&:hover': {
    background: theme.palette.action.hover,
  },
  '&:active': {
    background: theme.palette.action.active,
  },
  '&:target': {
    background: theme.palette.action.selected,
  },
}));

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton disableRipple {...props}>
      {props.children}
    </StyledButton>
  );
};
