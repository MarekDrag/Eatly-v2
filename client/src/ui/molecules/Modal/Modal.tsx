import { ReactNode, useState } from 'react';

import { useTranslation } from '@hooks/index';
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Dialog } from '@mui/material';
import { Button } from '@ui/index';

import { CancelButton } from './Modal.styles';

type Props = {
  openButtonLabel: string;
  title: string;
  contentText: string;
  acceptButtonLabel: string;
  children?: ReactNode;
  isWarning?: boolean;
  handleAccept: () => void;
};

export const Modal = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleAccept = () => {
    handleClose();
    props.handleAccept();
  };

  const buttonsProps = props.isWarning ? { background: '#DC3545', border: 'none', color: '#fff' } : {};

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} sx={buttonsProps}>
        {props.openButtonLabel}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.contentText}</DialogContentText>
          {props.children}
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleClose}>{t('Cancel')}</CancelButton>
          <Button onClick={handleAccept} sx={buttonsProps}>
            {props.acceptButtonLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
