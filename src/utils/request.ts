/** **   request.ts   *** */
import axios, { AxiosError, AxiosResponse } from 'axios';
// 消息提示组件
import { message } from 'antd';

// 创建新的axios实例
const service = axios.create({
  // 公共接口
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时时间 单位是ms，这里设置了5s的超时时间
  timeout: 5000,
});

// 添加一个请求拦截器
service.interceptors.request.use(
  config => {
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等
    // 从localStorage中获取token
    const token = localStorage.getItem('token') ?? '';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // 出现请求错误，清除toast
    message.destroy();
    // 请求错误，这里可以用全局提示框进行提示
    message.error('请求错误');
    return Promise.reject(error);
  }
);

// 添加一个响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 关闭等待提示
    message.destroy();
    const { status, data } = response;
    if (status === 200) {
      // 接口网络请求成功
      return data.data;
    }
    message.error(data.message || '接口返回错误');
    return Promise.reject(data);

  },
  (error: AxiosError) => {
    // 响应失败，关闭等待提示
    message.destroy();
    // 提示错误信息
    if (error.message.includes('Network Error')) {
      message.error('网络超时');
    }

    const { response } = error;
    if (response) {
      if (response.status === 400) {
        message.error('请求错误');
      } else if (response.status === 401) {
        message.error('未授权，请登录');
      } else {
        message.error('发生未知错误');
      }
    }

    return Promise.reject(error);
  }
);

export default service;
