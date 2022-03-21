/** @format */

import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
});

API.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = JSON.parse(localStorage.getItem("client_token"));

      if (token) {
        config.headers.Authorization = `Bearer ${token.token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default API;
