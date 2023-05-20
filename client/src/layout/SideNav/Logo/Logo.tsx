import { useContext } from 'react';

import { DrawerContext } from '@layout/DrawerContext';
import { Box, styled, Typography } from '@mui/material';

const LogoWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

const StyledLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export const Logo = () => {
  const { drawerOpen } = useContext(DrawerContext);

  return (
    <LogoWrapper height={drawerOpen ? 80 : 40} marginTop={drawerOpen ? 0 : '40px'}>
      <StyledLogo variant="h2" fontWeight={600} fontSize={drawerOpen ? 60 : 20}>
        Eatly
      </StyledLogo>
    </LogoWrapper>
  );
};
