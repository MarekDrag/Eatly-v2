import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { Divider as MuiDivider, styled } from '@mui/material';
import { Box } from '@ui/index';

import { Logo } from './Logo';
import { SideNavButton } from './SideNavButton';

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  height: '100%',
  width: '20%',
  maxWidth: 250,
  gap: 10,
  marginBottom: 20,
  background: theme.palette.background.paper,
  overflowX: 'hidden',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: 0,
  },
  [theme.breakpoints.down('md')]: {
    width: 80,
  },
}));

const Divider = styled(MuiDivider)({
  color: 'rgba(255,255,255, 0.54)',
  width: '80%',
});

export const SideNav = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Logo />
      <Divider />
      <SideNavButton link="/" icon={icons.home}>
        {t('Home')}
      </SideNavButton>
      <SideNavButton link="/mealPlanner" icon={icons.mealPlanner}>
        {t('Meal planner')}
      </SideNavButton>
      <SideNavButton link="/shoppingList" icon={icons.shoppingCart}>
        {t('Shopping list')}
      </SideNavButton>
      <SideNavButton link="/recipes" icon={icons.shoppingList}>
        {t('Recipes')}
      </SideNavButton>
      <SideNavButton link="/" icon={icons.book}>
        {t('CookBook')}
      </SideNavButton>
      <Divider />
      <SideNavButton link="/" icon={icons.settings}>
        {t('Settings')}
      </SideNavButton>
      <SideNavButton link="/support" icon={icons.support}>
        {t('Support')}
      </SideNavButton>
      <SideNavButton link="/faq" icon={icons.help}>
        {t('FAQ')}
      </SideNavButton>
    </Wrapper>
  );
};
