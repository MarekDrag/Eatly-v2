import { Route, Routes } from 'react-router-dom';

import { DashboardLayout } from '@layout/DashboardLayout/index';
import { Register, Login, ForgetPassword } from '@pages/index';

export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgetPassword />} />
    <Route path="/dashboard" element={<DashboardLayout />} />
    <Route path="*" element={<DashboardLayout />} />
  </Routes>
);
