/** @format */

import API from "../utils/API";

export const ProductDetailService = {
  getDetail,
  getListProductType,
  //   getBrand,
  getRating,
  createRating,
  getComment,
  getCommentSecond,
  createCommentSecond,
};

const BASE_REST_API_URL = "/product";
const PRO_TYPE_REST_API_URL = "/productType";
const PRO_COMMENT_REST_API_URL = "/comment";
const PRO_RATING_REST_API_URL = "/rating";
function getDetail(id) {
  return API.get(`${BASE_REST_API_URL}/${id}`);
}
function getListProductType(id) {
  return API.get(`${PRO_TYPE_REST_API_URL}/${id}`);
}

// rate
function getRating(id) {
  return API.get(`${PRO_RATING_REST_API_URL}/${id}`);
}

function createRating(data) {
  return API.post(`${PRO_RATING_REST_API_URL}`, data);
}

// comment
function getComment(id) {
  return API.get(`${PRO_COMMENT_REST_API_URL}/${id}`);
}

function getCommentSecond(id) {
  return API.get(`${PRO_COMMENT_REST_API_URL}/child/${id}`);
}

function createCommentSecond(data) {
    return API.post(`${PRO_COMMENT_REST_API_URL}`,data);
  }
  
  