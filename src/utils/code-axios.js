import axios from 'axios';
import { ElMessage } from "element-plus";

const instance = axios.create({
    baseURL: 'https://albatross21sms.azurewebsites.net',
    timeout: 5000
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

export let paymenPost = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            resolve(res.data);
        }).catch(err => {
            // reject(err);
        });
    });
};