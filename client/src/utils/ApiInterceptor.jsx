import axios from 'axios';

// export const baseUrl = process.env.REACT_APP_BASEURL;

export const baseUrl = 'http://localhost:3051/api';

var axiosInstance = axios.create();
axiosInstance.defaults.baseURL = baseUrl;

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosInstance;
