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

export const getWelcomeBonusAvail = (id, data) =>
  apiRequest("getWelcomeBonusAvail", data, id);

export const getSecurityQuestionsById = (id, data) => {
  return apiRequest("getSecurityQuestionsById", data, id);
};

export const verifySecurityQuestions = (data) =>
  apiRequest("verifySecurityQuestions", data);

export const forgotPassword = (id, data) =>
  apiRequest("forgotPassword", id, data);