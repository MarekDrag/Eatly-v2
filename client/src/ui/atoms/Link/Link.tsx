import { LinkProps, Link as MuiLink, styled } from '@mui/material';

const StyledLink = styled(MuiLink)({
  fontWeight: 500,
  cursor: 'pointer',
});

export const Link = (props: LinkProps) => {
  return <StyledLink {...props} />;
};
