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
  gap: '1rem',
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  marginBottom: 20,
  background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
  overflowX: 'hidden',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: 0,
  },
  [theme.breakpoints.down('md')]: {
    width: 80,
  },
  [theme.breakpoints.down('sm')]: {
    gap: 2,
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
      <SideNavButton href="" icon={icons.home} label={t('Home')} />
      <SideNavButton href="" icon={icons.mealPlanner} label={t('Meal planner')} />
      <SideNavButton href="" icon={icons.shoppingCart} label={t('Shopping list')} />
      <SideNavButton href="" icon={icons.shoppingList} label={t('Recipes')} />
      <SideNavButton href="" icon={icons.book} label={t('CookBook')} />
      <Divider />
      <SideNavButton href="" icon={icons.settings} label={t('Settings')} />
      <SideNavButton href="" icon={icons.support} label={t('Support')} />
      <SideNavButton href="" icon={icons.help} label={t('FAQ')} />
    </Wrapper>
  );
};
