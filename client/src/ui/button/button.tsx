import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  justifyContent: 'flex-start',
  borderRadius: 5,
  color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.main,
  background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
  '&:hover': {
    background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
    opacity: theme.palette.action.hoverOpacity,
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

type Props = ButtonProps & {
  label?: string;
};

export const Button = (props: Props) => {
  return (
    <StyledButton href="" {...props} disableRipple>
      {props.label ?? props.children}
    </StyledButton>
  );
};
