import { icons } from '@config/icons';

import { Comments } from './Comments';
import { Details } from './Details';
import { Ingredients } from './Ingredients/Ingredients';
import { RecipeDetailsWrapper, Image, BackButton } from './RecipeDetails.styles';
import { RecipeSteps } from './RecipeSteps';
import { data } from './data';

const props = data;

export const RecipeDetails = () => {
  return (
    <>
      <BackButton label={'Powrót'} startIcon={icons.arrowBack} />
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
