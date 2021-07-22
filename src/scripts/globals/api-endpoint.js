/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW_RESTAURANT: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
