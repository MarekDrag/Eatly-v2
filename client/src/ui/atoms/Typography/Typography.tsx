import { Typography as MuiTypography, TypographyProps, styled } from '@mui/material';

const StyledTypography = styled(MuiTypography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const Typography = (props: TypographyProps) => {
  return <StyledTypography {...props} />;
};
