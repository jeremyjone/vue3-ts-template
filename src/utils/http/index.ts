/*
 * @Author: JeremyJone
 * @Date: 2021-10-12 16:23:09
 * @LastEditors: JeremyJone
 * @LastEditTime: 2021-10-13 11:57:06
 * @Description: Axios 配置文件
 */

import Axios from "axios";

const baseURL = "";
const axios = Axios.create({
  baseURL, // 基础 url
  timeout: 10000 // 超时 10s
});

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // TODO: 配置请求内容

    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // TODO: 配置对响应内容的处理

    return response;
  },
  error => {
    let { response } = error;
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          response.message = "未知错误";
          break;
        case 401:
          response.message = "未授权";
          break;
        case 403:
          response.message = "权限不足";
          break;
        case 404:
          response.message = "数据不存在";
          break;
        case 405:
          response.message = "不允许的请求方法";
          break;
        case 408:
          response.message = "请求超时";
          break;
        case 415:
          response.message = "不支持的媒体类型";
          break;
        case 500:
          response.message = "服务器出现异常";
          break;
        case 501:
          response.message = "网络未实现";
          break;
        case 502:
          response.message = "网络错误";
          break;
        case 503:
          response.message = "服务不可用";
          break;
        case 504:
          response.message = "网络超时";
          break;
        case 505:
          response.message = "http版本不支持该请求";
          break;
        default:
          response.message = `其他错误。错误代码：${error.response.status}`;
      }
    } else {
      response = { message: "无法连接到服务器！" };
    }
    return Promise.reject(response);
  }
);

export default axios;
