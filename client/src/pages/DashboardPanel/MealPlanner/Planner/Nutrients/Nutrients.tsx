import { useTranslation } from '@hooks/index';
import { Paper, Box } from '@ui/index';

import { Calories, NutritionName, NutritionNumber, StyledGridBox } from './Nutrients.styles';

export const Nutrients = () => {
  const { t } = useTranslation();

  return (
    <Paper>
      <Calories variant="subtitle2">2100 {t('calories')}</Calories>
      <StyledGridBox>
        <Box>
          <NutritionNumber color="yellowgreen">122g</NutritionNumber>
          <NutritionName>{t('PROTEIN')}</NutritionName>
        </Box>
        <Box>
          <NutritionNumber color="orange">122g</NutritionNumber>
          <NutritionName>{t('CARBS')}</NutritionName>
        </Box>
        <Box>
          <NutritionNumber color="pink">122g</NutritionNumber>
          <NutritionName>{t('FAT')}</NutritionName>
        </Box>
      </StyledGridBox>
    </Paper>
  );
};
