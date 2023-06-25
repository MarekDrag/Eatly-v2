import { useTranslation } from '@hooks/index';
import { BoxProps } from '@mui/material';
import { Box } from '@ui/index';

import { SaveButton } from './SettingsFooter.styles';

export const SettingsFooter = ({ ...props }: BoxProps) => {
  const { t } = useTranslation();

  return (
    <Box marginTop="50px" {...props}>
      <SaveButton type="submit">{t('Save Changes')}</SaveButton>
    </Box>
  );
};
