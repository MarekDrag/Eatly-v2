import { Route, Routes } from 'react-router-dom';

import { MealPlanner, RecipeDetails, Recipes, ShoppingList, Support, FAQ, Dashboard, Settings } from '@pages/index';

export const Router = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/mealPlanner" element={<MealPlanner />} />
    <Route path="/shoppingList" element={<ShoppingList />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
    <Route path="/support" element={<Support />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="*" element={<Dashboard />} />
  </Routes>
);
