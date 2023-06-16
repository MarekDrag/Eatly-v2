import { Button as MuiButton, ButtonProps, styled, CircularProgress } from '@mui/material';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  justifyContent: 'flex-start',
  borderRadius: 5,
  color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.main,
  background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
  textTransform: 'none',
}));

type Props = ButtonProps & { isLoading?: boolean };

export const Button = (props: Props) => {
  const content = props.isLoading ? <CircularProgress size={24} /> : props.children;

  return <StyledButton {...props}>{content}</StyledButton>;
};
