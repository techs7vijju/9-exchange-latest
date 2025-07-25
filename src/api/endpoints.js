import { decryptData } from "../utils/cryptoUtils";

const getUserData = () => {
  const storedData = localStorage.getItem("user_data");
  return decryptData(storedData);
};
const userData = getUserData();
const websiteId = 2;

const endpoints = {
  getPageBanners: {
    method: "get",
    url: (params) => {
      return `/user/banners/${params.userId}/${params.page}/${params.place}`;
    },
  },

  getUserCountries: { method: "get", url: "/user/countries" },

  getSecurityQuestions: {
    method: "get",
    url: `/website/${websiteId}/user/securityQuestions`,
  },

  verifyUsername: {
    method: "post",
    url: `/website/${websiteId}/user/verify/username`,
  },

  signUpUser: {
    method: "post",
    url: () => `/website/${websiteId}/user/signup`,
  },

  oneClickSignup: {
    method: "post",
    url: () => `/website/${websiteId}/user/oneClickLogin`,
  },

  userLogin: { method: "post", url: `/website/${websiteId}/user/login` },

  getWelcomeBonusAvail: {
    method: "get",
    url: (id) => {
      return `/website/${websiteId}/getWelcomeBonusCard/${id}`;
    },
  },

  getSecurityQuestionsById: {
    method: "get",
    url: (id) => `/website/${websiteId}/user/securityQuestions/${id}`,
  },

  verifySecurityQuestions: {
    method: "post",
    url: () => `/website/${websiteId}/user/verify/securityQuestions`,
  },

  forgotPassword: {
    method: "post",
    url: (id) => `/website/${websiteNewId}/user/forgotPassword`,
  },
};

export default endpoints;
