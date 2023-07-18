import { useContext } from 'react';

import { icons } from '@config/icons';
import { DrawerContext } from '@contexts/DrawerContext';
import { useTranslation } from '@hooks/index';
import { Divider, IconButton } from '@ui/index';

import { DrawerButton } from './DrawerButton';
import { BackIconBox, ContentWrapper, StyledDrawer } from './DrawerNav.styles';
import { Logo } from './Logo';

const DESKTOP_DRAWER_WIDTH = 250;
const MOBILE_DRAWER_WIDTH = 80;

export const DrawerBody = () => {
  const { t } = useTranslation();
  const { drawerOpen, handleChange } = useContext(DrawerContext);

  const handleDrawer = () => {
    handleChange(!drawerOpen);
  };

  return (
    <>
      <BackIconBox>
        <IconButton onClick={handleDrawer} name={drawerOpen ? 'arrowLeft' : 'arrowRight'} />
      </BackIconBox>
      <Logo />
      <Divider sx={{ width: '80%' }} />
      <ContentWrapper>
        <DrawerButton link="/dashboard" icon={icons.home}>
          {t('Dashboard')}
        </DrawerButton>
        <DrawerButton link="/dashboard/mealPlanner" icon={icons.mealPlanner}>
          {t('Meal planner')}
        </DrawerButton>
        <DrawerButton link="/dashboard/shoppingList" icon={icons.shoppingCart}>
          {t('Shopping list')}
        </DrawerButton>
        <DrawerButton link="/dashboard/recipes" icon={icons.shoppingList}>
          {t('Recipes')}
        </DrawerButton>
        <DrawerButton link="/dashboard/my-recipes" icon={icons.book}>
          {t('My recipes')}
        </DrawerButton>
        <Divider sx={{ width: '80%' }} />
        <DrawerButton link="/dashboard/settings" icon={icons.settings}>
          {t('Settings')}
        </DrawerButton>
        <DrawerButton link="/dashboard/support" icon={icons.support}>
          {t('Support')}
        </DrawerButton>
        <DrawerButton link="/dashboard/faq" icon={icons.help}>
          {t('FAQ')}
        </DrawerButton>
      </ContentWrapper>
    </>
  );
};

export const DrawerNav = () => {
  const { drawerOpen } = useContext(DrawerContext);

  return (
    <>
      <StyledDrawer
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': { width: drawerOpen ? DESKTOP_DRAWER_WIDTH : MOBILE_DRAWER_WIDTH },
        }}
      >
        <DrawerBody />
      </StyledDrawer>
    </>
  );
};
