import { useLocation, useNavigate } from 'react-router-dom';

import { ButtonProps, styled, useMediaQuery, useTheme } from '@mui/material';
import { Button } from '@ui/index';

type SideNavButtonProps = ButtonProps & {
  link: string;
  icon: JSX.Element;
};

const StyledButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  width: '90%',
  height: 50,
  paddingLeft: 30,
  borderRadius: 20,
  color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.main,
  '&:hover': {
    background: theme.palette.action.hover,
  },
  '&:active': {
    background: theme.palette.action.active,
  },
  '&:target': {
    background: theme.palette.action.selected,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.main,
  },
}));

export const SideNavButton = (props: SideNavButtonProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentLocation = location.pathname === props.link;

  return (
    <StyledButton
      sx={{ background: isCurrentLocation ? theme.palette.action.selected : 'none' }}
      startIcon={props.icon}
      onClick={() => navigate(props.link)}
      {...props}
    >
      {isMobile ? null : props.children}
    </StyledButton>
  );
};
