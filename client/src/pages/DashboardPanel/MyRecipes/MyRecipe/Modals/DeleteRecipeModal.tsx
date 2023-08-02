import { useRecipeMutation } from '@api/recipes';
import { useTranslation } from '@hooks/index';
import { Modal } from '@ui/index';

type Props = {
  recipeId: string;
  handleClose: () => void;
  recipeName: string;
};

export const DeleteRecipeModal = ({ handleClose, recipeId, recipeName }: Props) => {
  const { t } = useTranslation();
  const { archiveUserRecipe } = useRecipeMutation();

  const handleAccept = () => {
    archiveUserRecipe.mutate({ recipeId });
    handleClose();
  };

  return (
    <>
      <Modal
        acceptButtonLabel={t('Delete')}
        title={`${t('Delete recipe')}: ${recipeName}`}
        contentText={t('Are you sure you want to delete this recipe? This action is irreversible.')}
        onOk={handleAccept}
        onCancel={handleClose}
        isWarning={true}
      />
    </>
  );
};
