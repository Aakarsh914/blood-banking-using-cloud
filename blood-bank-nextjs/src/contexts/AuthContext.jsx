"use client";
import { createContext, useState, useEffect, useCallback } from "react";
import apiClient from "../services/apiClient";

export const AuthContext = createContext({
  user: null,
  token: null,
  login: async () => {},
  requestOtp: async () => {},
  register: async () => {},
  logout: () => {},
  loading: true
});

function decodeTokenUser(token) {
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    delete apiClient.defaults.headers.common.Authorization;
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
    else setLoading(false);
  }, []);

  useEffect(() => {
    if (!token) {
      setUser(null);
      delete apiClient.defaults.headers.common.Authorization;
      setLoading(false);
      return;
    }

    localStorage.setItem("token", token);
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;

    if (!user) {
      try {
        setUser(decodeTokenUser(token));
      } catch (e) {
        console.error("Invalid token", e);
        logout();
      }
    }
    setLoading(false);
  }, [token, user, logout]);

  const login = async () => {
    throw new Error("Use the login page form to sign in.");
  };

  const requestOtp = async () => {
    throw new Error("Use the register page to request an OTP.");
  };

  const register = async () => {
    throw new Error("Use the register page to create an account.");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, requestOtp, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
