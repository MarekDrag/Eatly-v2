import { Dispatch, SetStateAction } from 'react';

import { DeleteRecipeModal } from './DeleteRecipeModal';
import { PublicRecipeModal } from './PublicRecipeModal';

export type MyRecipeModalKey = 'delete' | 'public' | null;

type Props = {
  modalKey: MyRecipeModalKey;
  setModalKey: Dispatch<SetStateAction<MyRecipeModalKey>>;
  recipeId: string;
  recipeName: string;
};

export const Modals = ({ modalKey, setModalKey, recipeId, recipeName }: Props) => {
  const handleClose = () => setModalKey(null);

  const renderModal = () => {
    switch (modalKey) {
      case 'delete':
        return <DeleteRecipeModal handleClose={handleClose} recipeId={recipeId} recipeName={recipeName} />;
      case 'public':
        return <PublicRecipeModal handleClose={handleClose} recipeId={recipeId} recipeName={recipeName} />;
      default:
        return null;
    }
  };

  return renderModal();
};
