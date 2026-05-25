"use client";
import axios from "axios";

const apiBaseUrl = "/api";

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 60000
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
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
