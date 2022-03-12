/** @format */

import API from "../utils/API";

export const CommontService = {
  getList,
};
const BASE_REST_API_URL = "/category";
function getList() {
  return API.get(`${BASE_REST_API_URL}`);
}
