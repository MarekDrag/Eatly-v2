import { ReactNode, createContext, useEffect, useState } from 'react';

import { useMeQuery } from '@api/me';
import { User } from '@api/types';
import { setCookie } from '@utils/cookies';

type AuthState = {
  user: User;
  accessToken: string | undefined;
  refreshToken: string | undefined;
};

export type AuthContextType = AuthState & {
  setAuthContext: (data: Partial<AuthState>) => void;
  logout: () => void;
};

const defaultUser: User = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  createdAt: new Date(),
  lastLogin: new Date(),
  imgUrl: '',
};

export const AuthContext = createContext<AuthContextType>({
  user: defaultUser,
  accessToken: undefined,
  refreshToken: undefined,
  setAuthContext: (_) => {},
  logout: () => {},
});

const defaultValues: AuthState = {
  user: defaultUser,
  accessToken: undefined,
  refreshToken: undefined,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>(defaultValues);
  const me = useMeQuery();

  const logout = () => {
    setAuthState(defaultValues);
  };

  const setAuthContext = (data: Partial<AuthState>) => {
    if (data.accessToken) {
      setCookie('accessToken', data.accessToken, 1);
    }
    setAuthState((prev) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    if (me.isSuccess && me.data) {
      setAuthState((prev) => ({ ...prev, ...me.data }));
    }
  }, [me.isStale]);

  return <AuthContext.Provider value={{ ...authState, setAuthContext, logout }}>{children}</AuthContext.Provider>;
};
