/** @format */

import API from "../utils/API";

export const LoginService = {
  login,
  signup,
  resetPass,
  createUser,
  getUserDetail,
  putUser
};

const BASE_URL = "user";

function login(data) {
  return API.post(`${BASE_URL}/login`, data);
}
function signup(data) {
  return API.post(`${BASE_URL}/signup`, data);
}
function resetPass(data) {
  return API.patch(`${BASE_URL}?email=${data}` );
}
function createUser(data) {
  return API.post(`${BASE_URL}/signup`, data);
}
function getUserDetail(id) {
  return API.get(`${BASE_URL}/${id}`);
}
function putUser(data) {
  return API.put(`${BASE_URL}`, data);
}