import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';
import { useMeQuery } from '@api/me';

export const PrivateRoutes = () => {
  const { accessToken } = useAuth();
  const me = useMeQuery();

  const isUserSigned = accessToken && me.data?.id;

  return isUserSigned ? <Outlet /> : <Navigate to="/login" />;
};
