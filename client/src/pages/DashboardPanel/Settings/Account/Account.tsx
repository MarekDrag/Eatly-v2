import { useMeQuery } from '@api/me';
import { useTranslation } from '@hooks/index';
import { CircularProgress } from '@mui/material';
import { Typography, Box } from '@ui/index';

import { AccountForm } from './Components/AccountForm';
import { AvatarForm } from './Components/AvatarForm';

export const Account = () => {
  const { t } = useTranslation();
  const meQuery = useMeQuery();

  if (!meQuery.isSuccess) {
    return (
      <Box width="100%">
        <Typography variant="h6">{t('General info')}</Typography>
        <Box display="flex" justifyContent="center" mt="50px">
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  return (
    <Box width="100%">
      <Typography variant="h6">{t('General info')}</Typography>
      <AvatarForm imgUrl={meQuery.data.imgUrl ?? ''} />
      <AccountForm user={meQuery.data} />
    </Box>
  );
};
