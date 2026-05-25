"use client";
import axios from "axios";

const apiBaseUrl = "/api";

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 60000
});

apiClient.interceptors.request.use((config) => {
  const path = config.url || "";
  if (path.includes("/auth/login") || path.includes("/auth/register") || path.includes("/auth/request-otp")) {
    delete config.headers.Authorization;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const path = error.config?.url || "";
    const isAuthAttempt =
      path.includes("/auth/login") ||
      path.includes("/auth/register") ||
      path.includes("/auth/request-otp");

    if (error.response?.status === 401 && !isAuthAttempt) {
      localStorage.removeItem("token");
      delete apiClient.defaults.headers.common.Authorization;
      const onLogin = window.location.pathname.includes("/login");
      if (!onLogin) {
        window.location.href = "/login?session=expired";
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
