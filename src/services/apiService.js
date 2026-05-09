import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL_BASE || "http://localhost:3001/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      if (window.location.pathname.startsWith("/admin")) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export const login = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const getMe = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};

export const setupAdmin = async (email, password) => {
  const response = await api.post("/auth/setup", { email, password });
  return response.data;
};

export const getData = async (endpoint) => {
  const response = await api.get(endpoint);
  return response.data;
};

export const postData = async (endpoint, data) => {
  const response = await api.post(endpoint, data);
  return response.data;
};

export const putData = async (endpoint, data) => {
  const response = await api.put(endpoint, data);
  return response.data;
};

export const deleteData = async (endpoint) => {
  const response = await api.delete(endpoint);
  return response.data;
};

export const fetchData = async (url) => {
  const response = await api.get(url);
  return response.data;
};

export default api;