import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useTranslation } from '@hooks/index';
import { CardContent, CardMedia, CardHeader, Menu, MenuItem, Chip } from '@mui/material';
import { IconButton, Rating } from '@ui/index';

import { Modals, MyRecipeModalKey } from './Modals/Modals';
import { RecipeWrapper } from './MyRecipe.styles';

type Props = {
  id: string;
  imgUrl: string | null;
  name: string;
  ratingValue: number;
  reviewsNumber: number;
  time: number;
  description: string;
  status: 'private' | 'public';
  createdAt: string;
};

export const MyRecipe = (props: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalKey, setModalKey] = useState<MyRecipeModalKey>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const openModal = (key: MyRecipeModalKey) => {
    setModalKey(key);
    handleCloseMenu();
  };

  const isRecipePublic = props.status === 'public';
  const createdAtDate = new Date(props.createdAt);

  return (
    <RecipeWrapper>
      <CardMedia
        component="img"
        height="200"
        image={props.imgUrl || ''}
        alt={props.name}
        onClick={() => navigate('/dashboard/recipes/:1')}
      />
      <CardHeader
        action={<IconButton onClick={handleOpenMenu} name="actions" />}
        title={props.name}
        subheader={`${t('Creation date')}: ${createdAtDate.toDateString()}`}
        style={{ height: 70, display: 'flex', alignItems: 'flex-start' }}
      />
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleCloseMenu}>
        <MenuItem onClick={() => openModal('public')} disabled={isRecipePublic}>
          {t('Promote')}
        </MenuItem>
        <MenuItem onClick={() => openModal('public')} disabled={isRecipePublic}>
          {t('Edit')}
        </MenuItem>
        <MenuItem onClick={() => openModal('delete')} disabled={isRecipePublic}>
          {t('Delete')}
        </MenuItem>
      </Menu>
      <CardContent
        onClick={() => navigate('/dashboard/recipes/:1')}
        sx={{ display: 'grid', gridTemplateColumns: '70% 1fr' }}
      >
        <Rating value={props.ratingValue} reviewsNumber={props.reviewsNumber} size="medium" readOnly={true} />
        {props.status === 'private' ? (
          <Chip label={t('Private')} color="secondary" />
        ) : (
          <Chip label={t('Public')} color="primary" />
        )}
      </CardContent>
      <Modals modalKey={modalKey} setModalKey={setModalKey} recipeId={props.id} recipeName={props.name} />
    </RecipeWrapper>
  );
};
