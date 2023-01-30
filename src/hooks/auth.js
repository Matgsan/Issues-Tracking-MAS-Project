import React, { useEffect, useMemo, useState } from 'react';
import authService from '../services/authService';

const AuthContext = React.createContext({
  user: null,
  loading: false,
  initialLoading: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    authService.init({
      onLogout: () => {
        setUser(null);
        //TODO: Display logout message
      },
    });
    setUser(authService.user);
    setInitialLoading(false);
  }, []);

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      await authService.signIn(email, password);
      setUser(authService.user);
    } catch (error) {
      console.log(error)
      //TODO: Display error message
    }
    setLoading(false);
  };

  const signUp = async (name, email, password) => {
    setLoading(true);
    try {
      await authService.signUp(name, email, password);
      setUser(authService.user);
    } catch (error) {
      //TODO: Display error message
    }
    setLoading(false);
  };

  const signOut = () => {
    setLoading(true);
    authService.signOut();
    setLoading(false);
  };

  const value = useMemo(
    () => ({ user, loading, initialLoading, signIn, signOut, signUp}),
    [user, loading, initialLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
