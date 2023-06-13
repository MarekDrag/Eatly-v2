import { styled } from '@mui/material';
import { Typography } from '@ui/index';

const StyledLogo = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  fontWeight: 500,
  color: theme.palette.primary.contrastText,
}));

export const Logo = () => {
  return <StyledLogo variant="h2">Eatly</StyledLogo>;
};
