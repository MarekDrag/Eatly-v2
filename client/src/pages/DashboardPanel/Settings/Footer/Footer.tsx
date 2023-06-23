import { useTranslation } from '@hooks/index';
import { Box } from '@ui/index';

import { CancelButton, SaveButton } from './Footer.styles';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box width="100%" marginTop="50px">
      <SaveButton type="submit">{t('Save Changes')}</SaveButton>
      <CancelButton sx={{ marginLeft: '20px' }}>{t('Cancel')}</CancelButton>
    </Box>
  );
};
