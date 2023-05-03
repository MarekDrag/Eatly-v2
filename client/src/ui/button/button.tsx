import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  justifyContent: 'flex-start',
  borderRadius: 5,
  border: '2px solid',
  borderColor: theme.palette.primary.main,
  color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.main,
  background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
  '&:hover': {
    background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
    opacity: 0.9,
  },
  '&:active': {
    background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
    opacity: theme.palette.action.activatedOpacity,
  },
  '&:target': {
    background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
    opacity: theme.palette.action.focusOpacity,
  },
}));

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props} disableRipple>
      {props.children}
    </StyledButton>
  );
};
