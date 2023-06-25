import { useUserMutations } from '@api/user';
import { useTranslation } from '@hooks/index';
import { Box, Modal } from '@ui/index';

import { SettingsFooter } from '../../SettingsFooter';

export const AccountFormFooter = () => {
  const { t } = useTranslation();
  const { deleteUserAccountMutation } = useUserMutations();

  return (
    <Box width="100%" display="flex" justifyContent="space-between" flexWrap="wrap">
      <SettingsFooter />
      <Box mt="50px">
        <Modal
          openButtonLabel={t('Delete account')}
          acceptButtonLabel={t('Delete')}
          title={t('Delete account')}
          contentText={t('Are you sure you want to delete this account? This action is irreversible.')}
          handleAccept={() => deleteUserAccountMutation.mutate()}
          isWarning={true}
        />
      </Box>
    </Box>
  );
};
