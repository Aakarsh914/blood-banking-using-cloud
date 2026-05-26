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
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const pad = base64.length % 4;
  const padded = pad ? base64 + "=".repeat(4 - pad) : base64;
  
  const payload = JSON.parse(decodeURIComponent(escape(atob(padded))));
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
    if (storedToken) {
      setToken(storedToken);
      apiClient.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
      try {
        const decodedUser = decodeTokenUser(storedToken);
        setUser(decodedUser);
      } catch (e) {
        console.error("Invalid token on load", e);
        localStorage.removeItem("token");
        delete apiClient.defaults.headers.common.Authorization;
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return; // Skip updates during initial mount
    
    if (token) {
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
    } else {
      setUser(null);
      delete apiClient.defaults.headers.common.Authorization;
    }
  }, [token, user, loading, logout]);

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
