import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

import { User } from '@api/User';

type AuthState = {
  user: User | undefined;
  accessToken: string | undefined;
};

export type AuthContextType = AuthState & {
  setAuthContext: Dispatch<SetStateAction<AuthState>>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  accessToken: undefined,
  setAuthContext: () => {},
  logout: () => {},
});

const defaultValues = {
  user: undefined,
  accessToken: undefined,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>(defaultValues);

  const logout = () => {
    setAuthState(defaultValues);
  };

  return (
    <AuthContext.Provider value={{ ...authState, setAuthContext: setAuthState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
