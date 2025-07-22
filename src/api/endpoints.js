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
};

export default endpoints;
