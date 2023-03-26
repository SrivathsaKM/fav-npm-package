import axiosInstance from './ApiInterceptor';

export const globalGetService = (url, params, data) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: 'GET',
      url: url,
      params: params,
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const globalPostService = (url, data) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: 'POST',
      url: url,
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const globalPutService = (url, data) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: 'PUT',
      url: url,
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const globalDeleteService = (url, data) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: 'DELETE',
      url: url,
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
