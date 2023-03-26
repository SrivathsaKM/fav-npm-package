import { globalDeleteService, globalGetService, globalPostService, globalPutService } from '../utils/GlobalApiServices';

export function searchFavNpmPackage(params) {
  return new Promise((resolve, reject) => {
    globalGetService(`search-list/${params}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getAllFavNpmPackage() {
  return new Promise((resolve, reject) => {
    globalGetService('/list/')
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getSingleFavNpmPackage(id) {
  return new Promise((resolve, reject) => {
    globalGetService(`/list/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function addFavNpmPackageForm(query) {
  return new Promise((resolve, reject) => {
    globalPostService(`/list/add/`, query)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function updateFavNpmPackageForm(id, query) {
  return new Promise((resolve, reject) => {
    globalPutService(`/list/update/${id}`, query)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function deleteFavNpmPackageForm(id) {
  return new Promise((resolve, reject) => {
    globalDeleteService(`/list/delete/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
