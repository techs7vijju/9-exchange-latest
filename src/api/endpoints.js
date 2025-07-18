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
};

export default endpoints;
