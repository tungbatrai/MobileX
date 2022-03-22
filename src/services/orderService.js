/** @format */

import API from "../utils/API";

export const orderService = {
  getMyOrder,
  deleteId,
};
const BASE_REST_API_URL = "/order";
function getMyOrder(data, name) {
  return API.get(
    `${BASE_REST_API_URL}?page=${data.pageable.pageNumber}&pageSize=${data.pageable.pageSize}&user=${name}`
  );
}

function deleteId(id) {
  return API.delete(`${BASE_REST_API_URL}/${id}`);
}
