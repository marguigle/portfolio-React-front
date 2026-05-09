import React, { createContext, useContext, useEffect, useState } from "react";
import { login as apiLogin, getMe } from "../services/apiService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedExpiry = localStorage.getItem("tokenExpiry");
    
    if (storedToken && storedUser) {
      if (storedExpiry && Date.now() > parseInt(storedExpiry)) {
        logout();
        setLoading(false);
        return;
      }
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (token) {
      validateToken();
    }
  }, [token]);

  const validateToken = async () => {
    try {
      const response = await getMe();
      setUser(response.user);
      localStorage.setItem("user", JSON.stringify(response.user));
    } catch (error) {
      logout();
    }
  };

  const login = async (email, password, remember = false) => {
    const response = await apiLogin(email, password);
    
    setToken(response.token);
    setUser(response.user);
    
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    
    if (remember) {
      const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem("tokenExpiry", expiry.toString());
      localStorage.setItem("remember", "true");
    } else {
      const expiry = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("tokenExpiry", expiry.toString());
    }
    
    return response;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("remember");
    localStorage.removeItem("tokenExpiry");
  };

  const isAuthenticated = !!token && !!user;
  const isAdmin = user?.rol === "admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated,
        isAdmin,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}