import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initial state for the user
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // In a real app, this would be a JWT token from a successful login
    // We'll use a mock user for now
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};