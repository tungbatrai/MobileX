/** @format */

import API from "../utils/API";

export const HomeService = {
  getProduct,
  //   signup,
};

const BASE_REST_API_URL = "/product";
// product/client?page=1&pageSize=10
function getProduct(data) {
  return API.get(
    `${BASE_REST_API_URL}?page=${data.pageable.pageNumber}&pageSize=${data.pageable.pageSize}`
  );
}
// function signup(data) {
//   return API.post(`${BASE_URL}/signup`, data);
// }
