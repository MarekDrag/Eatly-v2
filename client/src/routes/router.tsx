import { Route, Routes } from 'react-router-dom';

import { MealPlanner } from '@pages/MealPlanner/MealPlanner';
import { RecipeDetails } from '@pages/RecipeDetails';
import { Recipes } from '@pages/Recipes';
import { ShoppingList } from '@pages/ShoppingList';

export const Router = () => (
  <Routes>
    <Route path="/" element={<ShoppingList />} />
    <Route path="/mealPlanner" element={<MealPlanner />} />
    <Route path="/shoppingList" element={<ShoppingList />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
  </Routes>
);
