import { Route, Routes } from 'react-router-dom';

import {
  MealPlanner,
  RecipeDetails,
  Recipes,
  ShoppingList,
  Support,
  FAQ,
  Dashboard,
  Settings,
} from '@pages/DashboardPanel/index';

export const DashboardRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/dashboard/mealPlanner" element={<MealPlanner />} />
    <Route path="/dashboard/shoppingList" element={<ShoppingList />} />
    <Route path="/dashboard/recipes" element={<Recipes />} />
    <Route path="/dashboard/recipes/:recipeId" element={<RecipeDetails />} />
    <Route path="/dashboard/support" element={<Support />} />
    <Route path="/dashboard/faq" element={<FAQ />} />
    <Route path="/dashboard/settings" element={<Settings />} />
    <Route path="*" element={<Dashboard />} />
  </Routes>
);
