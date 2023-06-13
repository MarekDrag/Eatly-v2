import { useTranslation } from '@hooks/index';

import { CancelButton, SaveButton } from './Footer.styles';
import { Box } from '@ui/index';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box width="100%" marginTop="50px">
      <SaveButton>{t('Save Changes')}</SaveButton>
      <CancelButton sx={{ marginLeft: '20px' }}>{t('Cancel')}</CancelButton>
    </Box>
  );
};
