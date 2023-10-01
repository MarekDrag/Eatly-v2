import { useNavigate, useParams } from 'react-router-dom';

import { useRecipeDetailsQuery } from '@api/recipeDetails';
import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { Divider } from '@ui/index';

import { Comments, Details, Ingredients, RecipeSteps } from './Components';
import { RecipeDetailsWrapper, Image, BackButton, StyledBox, StyledPaper } from './RecipeDetails.styles';

export const RecipeDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const { data, isLoading } = useRecipeDetailsQuery({ recipeId: recipeId ?? '', enabled: !!recipeId });

  if (isLoading || !data) {
    return null;
  }

  return (
    <StyledPaper>
      <BackButton onClick={() => navigate(-1)} startIcon={icons.arrowBack}>
        {t('Back')}
      </BackButton>
      <RecipeDetailsWrapper>
        <StyledBox>
          <Details
            name={data.name}
            description={data.description}
            ratingValue={data.ratingValue}
            reviewsNumber={data.reviewsNumber}
            persons={data.persons}
            cookingTime={data.cookingTime}
            calories={data.calories}
          />
        </StyledBox>
        <Image src={data.imgUrl ?? undefined} alt={data.name} />
        <StyledBox>
          <Ingredients ingredients={data.ingredients} />
        </StyledBox>
        <StyledBox>
          <RecipeSteps steps={data.steps} />
        </StyledBox>
      </RecipeDetailsWrapper>
      <StyledBox marginTop="20px">
        <Divider style={{ marginBottom: 20 }} role="presentation" />
        <Comments comments={data.comments} />
      </StyledBox>
    </StyledPaper>
  );
};
