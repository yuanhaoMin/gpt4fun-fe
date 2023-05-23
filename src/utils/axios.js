import axios from 'axios';

axios.defaults.baseURL = '/chamber';
axios.defaults.timeout = 5000;
//请求拦截器
axios.interceptors.request.use((config) => {
    // config.headers.Authorization='';       //设置token；
    return config;
});
//响应拦截器
axios.interceptors.response.use(res => {
    return res;
});
//post
export let post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then((res) => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
};

//get
export let get = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.get(url, data = {}).then((res) => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
};


