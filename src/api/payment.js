import { paymenPost, get } from '../utils/axios';

export let payment = (data) => paymenPost('/payment/alipay/url', data);   //支付宝支付