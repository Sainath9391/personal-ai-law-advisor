import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://personal-ai-law-advisor-backend.onrender.com");

const api = axios.create({
  baseURL: API_BASE_URL
});

export default api;
