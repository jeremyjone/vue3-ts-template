/*
 * @Author: JeremyJone
 * @Date: 2021-10-12 16:38:55
 * @LastEditors: JeremyJone
 * @LastEditTime: 2021-10-13 15:14:36
 * @Description: 网络请求方法
 */

import axios from '.';

/**
 * @param  promise
 * @param errorExt - Additional Information you can pass to the err object
 */
function to<T, U = unknown>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U | null, T | undefined]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>(err => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }

      return [err, undefined];
    });
}

/**
 * GET methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get<T>(url: string, params = {}): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .get(url, {
          params
        })
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

/**
 * POST methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post<T>(url: string, data?: Record<string, unknown>): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

/**
 * PUT methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put<T>(url: string, data?: Record<string, unknown>): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

/**
 * DELETE methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del<T>(url: string, data?: Record<string, unknown>): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .delete(url, data)
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

/**
 * Download methods, download files.
 * @param url
 * @param config: header config, a object
 * @param filename
 * @param filetype: file mime type
 * @returns {Promise}
 */
export function download(
  url: string,
  filename: string,
  filetype: string,
  config = {}
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    axios({
      url,
      responseType: 'blob',
      method: 'GET',
      ...config
    })
      .then(result => {
        const fileURL = window.URL.createObjectURL(
          new Blob([result.data], { type: filetype })
        );
        const fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', filename);
        document.body.appendChild(fileLink);

        fileLink.click();
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
}
