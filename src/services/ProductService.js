/** @format */

import API from "../utils/API";

export const ProductService = {
  getProduct,
  getBrand,
};

const BASE_REST_API_URL = "/product";
const BRAND_REST_API_URL = "/brand";
// product/client?page=1&pageSize=10
function getProduct(data) {
  return API.get(
    `${BASE_REST_API_URL}/client?page=${data.pageable.pageNumber}&pageSize=${data.pageable.pageSize}&category_id=${data.category_id}&brand_id=${data.brand_id}&product=${data.product}`
  );
}
// http://localhost:5005/api/brand?page=1&pageSize=10
function getBrand() {
  return API.get(
    `${BRAND_REST_API_URL}?page=1&pageSize=10`
  );
}