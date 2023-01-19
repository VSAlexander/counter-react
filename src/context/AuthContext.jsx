import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  return value;
}
