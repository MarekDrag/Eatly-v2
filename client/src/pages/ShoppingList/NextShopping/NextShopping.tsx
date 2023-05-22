import { useTranslation } from '@hooks/index';

import { StyledBox, BoldText, Text } from '../ShoppingList.styles';

export const NextShopping = () => {
  const { t } = useTranslation();

  return (
    <StyledBox>
      <BoldText variant="h5">{t('Next shopping')}:</BoldText>
      <Text variant="h5">środa 10.09</Text>
    </StyledBox>
  );
};
