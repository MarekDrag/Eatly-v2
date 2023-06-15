import { ReactNode, createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState();
  const value = { currentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
