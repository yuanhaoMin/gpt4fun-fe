import { paymenPost } from '../utils/code-axios';

export let codeApi = (data) => paymenPost('/sms/message', data);   //发送验证码

export let verificationApi = (data) => paymenPost('/sms/validate-captcha', data);   //校验验证码