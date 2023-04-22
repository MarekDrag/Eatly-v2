import { styled } from '@mui/system';
import { Box } from '@ui/Box';

import { Search } from './Search';
import { MealSelect, TypeSelect } from './Selects';
import { IngredientSelect } from './Selects/IngredientSelect';

const DataFiltersWrapper = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  justifyItems: '',
  alignItems: 'flex-start',
  gap: 10,
  marginBottom: 10,
});

export const DataFilters = () => {
  return (
    <DataFiltersWrapper>
      <Search />
      <TypeSelect />
      <MealSelect />
      <IngredientSelect />
    </DataFiltersWrapper>
  );
};
