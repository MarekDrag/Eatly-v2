import { ButtonProps, styled, useMediaQuery, useTheme } from '@mui/material';
import { Button as UIButton } from '@ui/index';

type SideNavButtonProps = ButtonProps & {
  label: string;
  icon: JSX.Element;
};

const Button = styled(UIButton)(({ theme }) => ({
  justifyContent: 'flex-start',
  width: '90%',
  height: 50,
  paddingLeft: 30,
  borderRadius: 20,
  color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.main,
  },
}));

export const SideNavButton = (props: SideNavButtonProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Button href="" startIcon={props.icon} {...props}>
      {isMobile ? null : props.label}
    </Button>
  );
};
