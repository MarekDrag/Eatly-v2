import { WeekSelect } from '@components/index';

import { NextShopping } from './NextShopping';
import { ShoppingListWrapper } from './ShoppingList.styles';
import { ShoppingTable } from './ShoppingTable';

export const ShoppingList = () => {
  return (
    <ShoppingListWrapper>
      <NextShopping />
      <WeekSelect />
      <ShoppingTable />
    </ShoppingListWrapper>
  );
};
