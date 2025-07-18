import axios from "axios";
import qs from "qs";
import endpoints from "./endpoints";
import { baseUrl } from "./baseUrl";

const apiRequest = async (
  endpointKey,
  data = null,
  pathParams = null,
  queryParams = null
) => {
  try {
    const endpoint = endpoints[endpointKey];
    if (!endpoint) {
      throw new Error("Invalid endpoint key");
    }

    let url =
      typeof endpoint.url === "function"
        ? endpoint.url(pathParams)
        : endpoint.url;

    if (queryParams) {
      const queryString = qs.stringify(queryParams, { addQueryPrefix: true });
      url += queryString;
    }

    const jwt_token = localStorage.getItem("token");

    const response = await axios({
      method: endpoint.method,
      url: `${baseUrl}${url}`,
      data: data,
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
    });

    return {
      ...response.data,
      httpStatus: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const errorData = error.response?.data;

      switch (status) {
        case 401:
          throw ["Session expired. Login again."];
        case 404:
          throw { redirect: true, to: "/page-not-found" };
        case 409:
        case 500:
          throw ["Something went wrong."];
        case 422:
          if (errorData?.message || Array.isArray(errorData.message)) {
            throw errorData.message;
          } else {
            throw ["Something went wrong."];
          }
        default:
          throw ["Something went wrong."];
      }
    } else {
      throw ["Something went wrong."];
    }
  }
};

export default apiRequest;
