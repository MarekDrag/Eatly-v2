import { useNavigate } from 'react-router-dom';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';

import { Comments } from './Comments';
import { Details } from './Details';
import { Ingredients } from './Ingredients/Ingredients';
import { RecipeDetailsWrapper, Image, BackButton } from './RecipeDetails.styles';
import { RecipeSteps } from './RecipeSteps';
import { data } from './data';

const props = data;

export const RecipeDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <BackButton onClick={() => navigate(-1)} startIcon={icons.arrowBack}>
        {t('Back')}
      </BackButton>
      <RecipeDetailsWrapper>
        <Details {...props} />
        <Image src={props.img} alt={props.name} />
        <Ingredients {...props} />
        <RecipeSteps {...props} />
        <Comments {...props} />
      </RecipeDetailsWrapper>
    </>
  );
};
