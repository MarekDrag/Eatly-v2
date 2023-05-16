import { icons } from '@config/icons';
import { Box } from '@mui/material';

import { Text, Image, Recipe, RecipesWrapper } from './Recipe.styles';

const arr = new Array(20).fill('');

export const RecipesList = () => {
  return (
    <RecipesWrapper>
      {arr.map((a) => (
        <Recipe>
          <Box width="200px" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Text marginBottom="10px">Pizza peperoni</Text>
            <Image
              src="https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg"
              alt="Pizza peperoni"
            />
            <Box width="50%">
              <Text variant="subtitle2">
                {icons.clock}
                <span>30m</span>
              </Text>
              <Text variant="subtitle2" marginTop="10px">
                cal: 340
              </Text>
            </Box>
          </Box>
        </Recipe>
      ))}
    </RecipesWrapper>
  );
};
