import { Box } from '@mui/material';
import { Paper } from '@ui/Paper';

import { Calories, NutritionName, NutritionNumber, StyledGridBox } from './Nutrients.styles';

export const Nutrients = () => {
  return (
    <Paper>
      <Calories variant="subtitle2">2100 calories</Calories>
      <StyledGridBox>
        <Box>
          <NutritionNumber color="yellowgreen">122g</NutritionNumber>
          <NutritionName>PROTEIN</NutritionName>
        </Box>
        <Box>
          <NutritionNumber color="orange">122g</NutritionNumber>
          <NutritionName>CARBS</NutritionName>
        </Box>
        <Box>
          <NutritionNumber color="pink">122g</NutritionNumber>
          <NutritionName>FAT</NutritionName>
        </Box>
      </StyledGridBox>
    </Paper>
  );
};
