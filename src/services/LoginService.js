/** @format */

import API from "../utils/API";

export const LoginService = {
  login,
  signup,
};

const BASE_URL = "user";

function login(data) {
  return API.post(`${BASE_URL}/login`, data);
}
function signup(data) {
  return API.post(`${BASE_URL}/signup`, data);
}
