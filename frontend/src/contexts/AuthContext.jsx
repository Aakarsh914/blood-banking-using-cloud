import { createContext, useState, useEffect } from "react";
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
  return JSON.parse(decodeURIComponent(escape(atob(padded))));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      if (!user) {
        try {
          const payload = decodeTokenUser(token);
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
    const res = await apiClient.post("/auth/login", { email, password });
    setToken(res.data.token);
    setUser(res.data.user);
  };

  const requestOtp = async (email) => {
    const res = await apiClient.post("/auth/request-otp", { email });
    return res.data;
  };

  const register = async ({ name, email, password, role, hospitalId, bloodGroup, otp }) => {
    await apiClient.post("/auth/register", { name, email, password, role, hospitalId, bloodGroup, otp });
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
