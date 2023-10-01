import { useNavigate, useParams } from 'react-router-dom';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';

import { Comments, Details, Ingredients, RecipeSteps } from './Components';
import { RecipeDetailsWrapper, Image, BackButton, StyledPaper } from './RecipeDetails.styles';
import { data } from './data';
import { useRecipeDetailsQuery } from '@api/recipeDetails';

const props = data;

export const RecipeDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const { data, isLoading } = useRecipeDetailsQuery({ recipeId: recipeId ?? '', enabled: !!recipeId });

  if (isLoading || !data) {
    return null;
  }

  return (
    <>
      <BackButton onClick={() => navigate(-1)} startIcon={icons.arrowBack}>
        {t('Back')}
      </BackButton>
      <RecipeDetailsWrapper>
        <StyledPaper>
          <Details
            name=""
            description=""
            ratingValue={data.ratingValue}
            reviewsNumber={data.reviewsNumber}
            persons={data.personsNumber}
            cookingTime={data.time}
            calories={data.calories}
          />
        </StyledPaper>
        <Image src={props.img} alt={props.name} />
        <StyledPaper>
          <Ingredients ingredients={data.ingredients} />
        </StyledPaper>
        <StyledPaper>
          <RecipeSteps steps={data.steps} />
        </StyledPaper>
        {/* <StyledPaper>
          <Comments />
        </StyledPaper> */}
      </RecipeDetailsWrapper>
    </>
  );
};
