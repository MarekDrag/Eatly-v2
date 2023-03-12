import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { Box, Button, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)({
  background: '#45AE95',
  position: 'fixed',
  width: 240,
  height: '100%',
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  justifyContent: 'center',
});

const LinkButton = styled(Button)({
  width: 220,
  height: 50,
  color: '#fff',
  justifyContent: 'flex-start',
  paddingLeft: 30,
  disableRipple: false,
  '&:hover': {
    background: '#189F7F',
  },
  '&:active': {
    paddingLeft: 50,
  },
});

const StyledLogo = styled(Box)({
  width: 240,
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Logo = () => {
  return (
    <StyledLogo>
      <Typography variant="h2">Eatly</Typography>
    </StyledLogo>
  );
};

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Logo />
      <LinkButton href="" startIcon={icons.home} disableRipple>
        {t('Home')}
      </LinkButton>
      <LinkButton href="" startIcon={icons.mealPlanner}>
        {t('Meal planner')}
      </LinkButton>
      <LinkButton href="" startIcon={icons.shoppingCart}>
        {t('Shopping list')}
      </LinkButton>
      <LinkButton href="" startIcon={icons.shoppingList}>
        {t('Recipes')}
      </LinkButton>
      <LinkButton href="" startIcon={icons.book}>
        {t('CookBook')}
      </LinkButton>
      <Divider variant="middle" color="#fff" />
      <LinkButton href="" startIcon={icons.settings}>
        {t('Settings')}
      </LinkButton>
      <LinkButton href="" startIcon={icons.support}>
        {t('Support')}
      </LinkButton>
      <LinkButton href="" startIcon={icons.help}>
        {t('FAQ')}
      </LinkButton>
    </Wrapper>
  );
};
