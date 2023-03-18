import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { Logo } from '@ui/index';

import { Divider, Button, Wrapper } from './SideNav.styled';

export const SideNav = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Logo />
      <Divider />
      <Button href="" startIcon={icons.home}>
        {t('Home')}
      </Button>
      <Button href="" startIcon={icons.mealPlanner}>
        {t('Meal planner')}
      </Button>
      <Button href="" startIcon={icons.shoppingCart}>
        {t('Shopping list')}
      </Button>
      <Button href="" startIcon={icons.shoppingList}>
        {t('Recipes')}
      </Button>
      <Button href="" startIcon={icons.book}>
        {t('CookBook')}
      </Button>
      <Divider />
      <Button href="" startIcon={icons.settings}>
        {t('Settings')}
      </Button>
      <Button href="" startIcon={icons.support}>
        {t('Support')}
      </Button>
      <Button href="" startIcon={icons.help}>
        {t('FAQ')}
      </Button>
    </Wrapper>
  );
};
