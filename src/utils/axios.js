import axios from 'axios';
import { ElMessage } from "element-plus";

const instance = axios.create({
    baseURL: 'https://albatross21.azurewebsites.net',
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
    if (error.response.status == 401) {
        ElMessage({
            showClose: true,
            message: '账户或密码错误！',
            type: 'error',
        });
    }
    return Promise.reject(error);
});



//post
export let post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then((res) => {
            resolve(res);
        }).catch(err => {
            // reject(err);
        });
    });
};

//get
export let get = (url, data) => {
    return new Promise((resolve, reject) => {
        instance.get(url, data = {}).then((res) => {
            resolve(res);
        }).catch(err => {
            // reject(err);
        });
    });
};


