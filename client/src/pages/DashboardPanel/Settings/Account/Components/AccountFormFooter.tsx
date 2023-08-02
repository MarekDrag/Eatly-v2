import { useState } from 'react';

import { useUserMutations } from '@api/user';
import { useTranslation } from '@hooks/index';
import { Box, Button, Modal } from '@ui/index';

import { SettingsFooter } from '../../SettingsFooter';

export const AccountFormFooter = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { deleteUserAccountMutation } = useUserMutations();

  const handleModalClose = () => setIsOpen(false);
  const handleModalAccept = () => {
    deleteUserAccountMutation.mutate();
    handleModalClose();
  };

  return (
    <Box width="100%" display="flex" justifyContent="space-between" flexWrap="wrap">
      <SettingsFooter />
      <Box mt="50px">
        <Button
          variant="outlined"
          onClick={() => setIsOpen(true)}
          sx={{ background: '#DC3545', border: 'none', color: '#fff' }}
        >
          {t('Delete account')}
        </Button>
        {isOpen && (
          <Modal
            acceptButtonLabel={t('Delete')}
            title={t('Delete account')}
            contentText={t('Are you sure you want to delete this account? This action is irreversible.')}
            onOk={handleModalAccept}
            onCancel={handleModalClose}
            isWarning={true}
          />
        )}
      </Box>
    </Box>
  );
};
