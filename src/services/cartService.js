/** @format */

import API from "../utils/API";

export const cartService = {
  creatCart,
  //   signup,
};

const BASE_REST_API_URL = "/order";
// product/client?page=1&pageSize=10
function creatCart(data) {
  return API.post(
    `${BASE_REST_API_URL}`,data
  );
}
