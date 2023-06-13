import { Paper, WeekSelect } from '@ui/index';
import { NextShopping } from './NextShopping';
import { ShoppingListWrapper } from './ShoppingList.styles';
import { ShoppingTable } from './ShoppingTable';

export const ShoppingList = () => {
  return (
    <ShoppingListWrapper>
      <NextShopping />
      <Paper marginLeft="10px">
        <WeekSelect iconSize="large" />
      </Paper>
      <ShoppingTable />
    </ShoppingListWrapper>
  );
};
