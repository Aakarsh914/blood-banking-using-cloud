"use client";
import { createContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { formatApiError } from "@/lib/formatApiError";

export const AuthContext = createContext({
  user: null,
  token: null,
  login: async () => {},
  requestOtp: async () => {},
  register: async () => {},
  logout: () => {},
  loading: true
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      if (!user) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          setUser(payload);
        } catch (e) {
          console.error("Invalid token", e);
          logout();
        }
      }
    } else {
      localStorage.removeItem("token");
      delete apiClient.defaults.headers.common["Authorization"];
      setUser(null);
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    const trimmedEmail = String(email ?? "").trim().toLowerCase();
    const trimmedPassword = String(password ?? "").trim();
    try {
      delete apiClient.defaults.headers.common.Authorization;
      localStorage.removeItem("token");
      const res = await apiClient.post("/auth/login", {
        email: trimmedEmail,
        password: trimmedPassword
      });
      if (!res.data?.token || !res.data?.user) {
        throw new Error("Login response was incomplete. Redeploy the latest app and try again.");
      }
      setUser(res.data.user);
      setToken(res.data.token);
      setLoading(false);
    } catch (err) {
      const message = formatApiError(err);
      const error = new Error(message);
      error.cause = err;
      throw error;
    }
  };

  const requestOtp = async (email) => {
    try {
      const res = await apiClient.post("/auth/request-otp", {
        email: String(email ?? "").trim().toLowerCase()
      });
      return res.data;
    } catch (err) {
      const message = formatApiError(err);
      const error = new Error(message);
      error.cause = err;
      throw error;
    }
  };

  const register = async ({ name, email, password, role, hospitalId, bloodGroup, otp }) => {
    try {
      await apiClient.post("/auth/register", { name, email, password, role, hospitalId, bloodGroup, otp });
    } catch (err) {
      const message = formatApiError(err);
      const error = new Error(message);
      error.cause = err;
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, requestOtp, register, logout, loading }}>
        {children}
    </AuthContext.Provider>
  );
}
