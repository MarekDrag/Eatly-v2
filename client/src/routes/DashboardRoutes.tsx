import { Route, Routes } from 'react-router-dom';

import { Cookbook } from '@pages/DashboardPanel/Cookbook';
import { Dashboard } from '@pages/DashboardPanel/Dashboard';
import { FAQ } from '@pages/DashboardPanel/FAQ';
import { MealPlanner } from '@pages/DashboardPanel/MealPlanner';
import { RecipeBuilder } from '@pages/DashboardPanel/RecipeBuilder';
import { RecipeDetails } from '@pages/DashboardPanel/RecipeDetails';
import { Recipes } from '@pages/DashboardPanel/Recipes';
import { Settings } from '@pages/DashboardPanel/Settings';
import { ShoppingList } from '@pages/DashboardPanel/ShoppingList';
import { Support } from '@pages/DashboardPanel/Support';

export const DashboardRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/dashboard/mealPlanner" element={<MealPlanner />} />
    <Route path="/dashboard/shoppingList" element={<ShoppingList />} />
    <Route path="/dashboard/recipes" element={<Recipes />} />
    <Route path="/dashboard/recipes/:recipeId" element={<RecipeDetails />} />
    <Route path="/dashboard/new-recipe" element={<RecipeBuilder />} />
    <Route path="/dashboard/support" element={<Support />} />
    <Route path="/dashboard/cookbook" element={<Cookbook />} />
    <Route path="/dashboard/faq" element={<FAQ />} />
    <Route path="/dashboard/settings" element={<Settings />} />
    <Route path="*" element={<Dashboard />} />
  </Routes>
);
