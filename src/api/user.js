import { post, get } from '../utils/axios';

export let login = (data) => post('/user/login', data);   //登录

export let register = (data) => post('/user/register', data);   //注册

export let info = (data) => get('/user/info?username='+data)  //获取用户信息    
