import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';

export const PrivateRoutes = () => {
  const { accessToken } = useAuth();

  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};
