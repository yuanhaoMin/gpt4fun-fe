import { post } from '../utils/axios';

export let login = (data) => post('/user/login', data);   //登录

export let register = (data) => post('/user/register', data);   //注册
