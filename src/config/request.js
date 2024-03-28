import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({ baseURL: "http://localhost:3000/" });

request.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${Cookies.get("user-token")}`,
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export { request };
