import apiRequest from "./apiRequest";

export const getPageBanners = (params) => {
  return apiRequest("getPageBanners", {}, params);
};
