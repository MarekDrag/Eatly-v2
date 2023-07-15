import { useTranslation } from '@hooks/index';
import { Box, Typography } from '@ui/index';

export const NoRecipesFound = () => {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      marginTop="40px"
      marginBottom="40px"
      id="recipes-not-found"
    >
      <Typography variant="h6">{t('No recipes matching your search criteria')}</Typography>
    </Box>
  );
};
