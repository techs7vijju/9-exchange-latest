import apiRequest from "./apiRequest";

export const getPageBanners = (params) => {
  return apiRequest("getPageBanners", {}, params);
};

export const getUserCountries = (data) => apiRequest("getUserCountries", data);

export const getSecurityQuestions = (data) =>
  apiRequest("getSecurityQuestions", data);

export const verifyUsername = (data) => apiRequest("verifyUsername", data);

export const signUpUser = (data) => apiRequest("signUpUser", data);

export const oneClickSignup = (data) => apiRequest("oneClickSignup", data);

export const userLogin = (data) => apiRequest("userLogin", data);
