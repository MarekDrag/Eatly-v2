import { ReactNode } from 'react';

import { useTranslation } from '@hooks/index';
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Dialog } from '@mui/material';
import { Button } from '@ui/index';

import { CancelButton } from './Modal.styles';

type Props = {
  title: string;
  contentText: string;
  acceptButtonLabel: string;
  children?: ReactNode;
  isWarning?: boolean;
  onOk: () => void;
  onCancel: () => void;
};

export const Modal = (props: Props) => {
  const { t } = useTranslation();
  const { isWarning, contentText, children, onOk, acceptButtonLabel, onCancel, title } = props;

  const buttonsProps = isWarning ? { background: '#DC3545', border: 'none', color: '#fff' } : {};

  return (
    <Dialog open={true}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <CancelButton onClick={onCancel}>{t('Cancel')}</CancelButton>
        <Button onClick={onOk} sx={buttonsProps}>
          {acceptButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
