/** @format */

import API from "../utils/API";

export const HomeService = {
  getProduct,
};

const BASE_REST_API_URL = "/product";
function getProduct(data) {
  return API.get(
    `${BASE_REST_API_URL}?page=${data.pageable.pageNumber}&pageSize=${data.pageable.pageSize}`
  );
}