import { useNavigate } from 'react-router-dom';

import { RecipeSteps } from '@components/index';
import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';

import { Comments } from './Comments';
import { Details } from './Details';
import { Ingredients } from './Ingredients/Ingredients';
import { RecipeDetailsWrapper, Image, BackButton, StyledPaper } from './RecipeDetails.styles';
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
        <StyledPaper>
          <Details {...props} />
        </StyledPaper>
        <Image src={props.img} alt={props.name} />
        <StyledPaper>
          <Ingredients {...props} />
        </StyledPaper>
        <StyledPaper>
          <RecipeSteps {...props} />
        </StyledPaper>
        <StyledPaper>
          <Comments {...props} />
        </StyledPaper>
      </RecipeDetailsWrapper>
    </>
  );
};
