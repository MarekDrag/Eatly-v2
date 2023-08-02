import { useRecipeMutation } from '@api/recipes';
import { useTranslation } from '@hooks/index';
import { Modal } from '@ui/index';
import { Alert } from '@mui/material';

type Props = {
  recipeId: string;
  handleClose: () => void;
  recipeName: string;
};

export const PublicRecipeModal = ({ handleClose, recipeId, recipeName }: Props) => {
  const { t } = useTranslation();
  const { updateUserRecipe } = useRecipeMutation();

  const handleAccept = () => {
    updateUserRecipe.mutate({ recipeId, payload: { status: 'public' } });
    handleClose();
  };

  return (
    <>
      <Modal
        acceptButtonLabel={t('Public')}
        title={`${t('Public recipe')}: ${recipeName}`}
        contentText={t('Are you sure you want to public this recipe? This action is irreversible.')}
        onOk={handleAccept}
        onCancel={handleClose}
      >
        <Alert severity="warning" style={{ marginTop: '20px' }}>
          {t('Warning! When you set recipe as public, you will not be able to edit, set it to private or delete!')}
        </Alert>
      </Modal>
    </>
  );
};
