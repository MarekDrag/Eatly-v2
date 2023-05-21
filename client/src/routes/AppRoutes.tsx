import { Route, Routes } from 'react-router-dom';

import { DashboardLayout } from '@layout/index';

export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<div />} />
    <Route path="/dashboard" element={<DashboardLayout />} />
    <Route path="*" element={<DashboardLayout />} />
  </Routes>
);
