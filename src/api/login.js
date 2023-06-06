import { post } from '../utils/axios';

export let login = (data) => post('/user/login', data);   //登录
