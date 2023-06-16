import { Route, Routes } from 'react-router-dom';

import { DashboardLayout } from '@layout/DashboardLayout/index';
import { ForgetPassword } from '@pages/LoginPanel/ForgetPassword';
import { Login } from '@pages/LoginPanel/Login';
import { Register } from '@pages/LoginPanel/Register';

import { PrivateRoutes } from './PrivateRoutes';

export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgetPassword />} />
    <Route element={<PrivateRoutes />}>
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="*" element={<DashboardLayout />} />
    </Route>
  </Routes>
);
