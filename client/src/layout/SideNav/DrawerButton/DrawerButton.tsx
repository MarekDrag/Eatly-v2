import { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { DrawerContext } from '@layout/DrawerContext';
import { ButtonProps, useTheme } from '@mui/material';

import { StyledButton } from './DrawerButton.styles';

type DrawerButtonProps = ButtonProps & {
  link: string;
  icon: JSX.Element;
};

export const DrawerButton = (props: DrawerButtonProps) => {
  const { drawerOpen } = useContext(DrawerContext);
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentLocation = location.pathname === props.link;
  const colorOnTarget = isCurrentLocation ? theme.palette.primary.contrastText : '';
  const backgroundOnTarget = () => {
    if (isCurrentLocation) {
      return theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.dark;
    }
    return '';
  };

  return (
    <StyledButton
      sx={{
        color: colorOnTarget,
        background: backgroundOnTarget,
        '&:hover': {
          background: backgroundOnTarget,
          color: colorOnTarget,
          opacity: 0.8,
        },
      }}
      startIcon={props.icon}
      onClick={() => navigate(props.link)}
      {...props}
    >
      {drawerOpen ? props.children : null}
    </StyledButton>
  );
};
