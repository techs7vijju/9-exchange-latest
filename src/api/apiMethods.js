import apiRequest from "./apiRequest";

export const getPageBanners = (params) => {
  return apiRequest("getPageBanners", {}, params);
};

export const getUserCountries = (data) => apiRequest("getUserCountries", data);

export const getSecurityQuestions = (data) =>
  apiRequest("getSecurityQuestions", data);
