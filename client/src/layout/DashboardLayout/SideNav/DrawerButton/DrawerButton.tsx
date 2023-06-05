import { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { ButtonProps, useTheme } from '@mui/material';
import { DrawerContext } from '@store/DrawerContext';

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
  const backgroundOnTarget = () => {
    if (isCurrentLocation) {
      return theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark;
    }
    return '';
  };

  return (
    <StyledButton
      sx={{
        background: backgroundOnTarget,
      }}
      startIcon={props.icon}
      onClick={() => navigate(props.link)}
      {...props}
    >
      {drawerOpen ? props.children : null}
    </StyledButton>
  );
};
