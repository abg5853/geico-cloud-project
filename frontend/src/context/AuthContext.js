// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

/**
 * Wrap your <App> in this, in index.js:
 * <AuthProvider><App/></AuthProvider>
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // stub login/logout for demo
  const login = (username) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ name: username });
      setLoading(false);
    }, 500);
  };
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// hook to consume it
export function useAuth() {
  return useContext(AuthContext);
}
