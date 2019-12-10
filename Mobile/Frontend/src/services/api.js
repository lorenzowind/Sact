import axios from "axios";

const api = axios.create({ baseURL: "http://10.10.30.74:3006" });

api.interceptors.request.use(async config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
