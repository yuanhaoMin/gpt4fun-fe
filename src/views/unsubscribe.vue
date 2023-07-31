<template>
    <div class="unsubscribe">
        <div class="unsubscribe-content" v-show="isShownothave">
            <h3>账号注销</h3>
            <div class="mRight">账号注销则视为您主动放弃以下资产和权益，且同意以下规则：</div>
            <div class="mRight">1.账户注销后, 您将无法登录、使用Bizcamp AI账号, 且不支持找回个人资料。</div>
            <div class="mRight">2.该账号将解除与其他产品的绑定或授权关系，且不支持找回。</div>
            <div class="mRight">3.专业版等付费权益，包含已经产生但未消耗完毕的权益或未来预期权益。</div>
            <div class="mRight">4.将不在支持使用已注销账户的用户ID注册新的账户。</div>
            <div class="mRight">5.注销Bizcamp AI账号并不代表您注销前的账号行为和相关责任得到豁免或减轻。</div>
            <button @click="this.isShownothave = false, this.isShowhave = true">已知悉,确认注销账户</button>
        </div>
        <div class="section" v-show="isShowhave">
            <h1>账号注销</h1>
            <div class="code-v"><span>验证码</span> <input type="text" maxlength="6" v-model="sms"
                    placeholder="请输入短信验证码"><button class="yzmbtn" @click="sendCod">{{ codeNum == 60 ? "发送验证码"
                        : `(${codeNum})秒发送` }}</button></div>
            <div class="sectiontwo">
                <el-checkbox v-model="checked1" />我已阅读并同意<span @click="agree">《Bizcamp
                    AI用户服务条款》</span>
            </div>
            <div style="text-align: center;">
                <button class="permanent" @click="unregister" :disabled="sleected ? fasle : true"
                    :class="sleected ? 'open' : ''">永久注销</button>
            </div>
        </div>
        <agreement ref="agreement" @agreement="getservice"></agreement>
        <userAccount class="userAccount"></userAccount>
    </div>
</template>

<script>
import { deleteuser } from '@/api/user.js';
import { codeApi, verificationApi } from '@/api/mobile-phone.js';
import { getData, removeData } from '../utils/store-crud';
import userAccount from '@/components/userAcccountMsg.vue';
import { ElMessage } from 'element-plus';
import agreement from "@/components/serviceAgreement/index.vue";
export default {
    components: {
        userAccount,
        agreement
    },
    data() {
        return {
            checked1: false,
            isClickSend: false,
            codeNum: '60',
            sms: '',
            sleected: false,
            isShownothave: true,
            isShowhave: false
        }
    },

    watch: {
        sms: {
            handler(newValue, oldVal) {
                switch (newValue.length) {
                    case 6:
                        this.sleected = true
                        break;

                    default:
                        this.sleected = false
                        break;
                }
            }
        }
    },
    methods: {
        agree() {
            this.$refs.agreement.centerDialogVisible = true;
        },
        getservice(data) {
            this.checked1 = data;
        },
        async sendCod() {
            if (this.isClickSend == true || this.codeNum != 60) return;
            this.isClickSend = true;

            let clearId = setInterval(() => {
                this.codeNum--;
                document.getElementsByClassName('yzmbtn')[0].style.color = 'darkgrey';
                if (this.codeNum == 0) {
                    clearInterval(clearId);
                    this.codeNum = 60;
                    document.getElementsByClassName('yzmbtn')[0].style.color = '#FFFFFF';
                    this.isClickSend = false;
                }
            }, 1000);
            let res = await codeApi({ "phone": getData('username'), "token": 'bizcampgpt' });
        },
        async unregister() {
            if (!this.checked1) return ElMessage.error('需同意本服条条款!');
            let res = await verificationApi({
                "phone": getData('username'),
                "captcha": this.sms
            });
            if (res == 'Success') {
                let res = await deleteuser(getData('username'));
                console.log(res);
                if (res.status == '200') {
                    ElMessage({
                        message: '注销成功,感谢您的使用!',
                        type: 'success',
                    })
                    removeData('username');
                    removeData('token');
                    removeData('default');
                    this.$router.push('/');
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
.unsubscribe {
    width: 90%;
    height: 100%;
    color: #FFFFFF;
    border-radius: 25px;
    background: #29263d;
    box-sizing: border-box;
    padding: 15px;

    .open {
        background: rgb(202, 27, 27);
        color: #FFFFFF;
    }

    .userAccount {
        position: absolute;
        right: 30px;
        top: 80px;
        box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.26);
    }

    .unsubscribe-content {
        h3 {
            margin-top: 25px;
            text-align: center;
            font-size: 36px;
        }

        background:#FFFFFF;
        display: flex;
        flex-direction: column;
        width: 800px;
        height: 600px;
        border-radius: 15px;
        line-height: 2;
        color: black;
        font-size: 16px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .mRight {
            margin-left: 50px;
            font-size: 18px;
            line-height: 2;
        }

        button {
            width: 600px;
            height: 40px;
            border: 0px;
            margin: auto;
            margin-top: 200px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 17px;
            background: rgb(181, 24, 24);
            color: #FFFFFF;
            cursor: pointer;
        }
    }

    .section {
        h1 {
            margin-top: 50px;
            text-align: center;
        }

        .code-v {
            margin: auto;
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 500px;
            height: 70px;
            box-shadow: 0px 1px 0px 0px #b6b2b2;


            input {
                background: #29263d;
                border: 0;
                height: 22px;
                outline: none;
                color: #FFFFFF;
                box-shadow: 0px 0px 0px 1px #f5f5f5;
                border-radius: 5px;
                padding: 5px;
            }

            button {
                width: 120px;
                height: 36px;
                border-radius: 10px;
                border: 0px;
                background: #331567;
                color: #FFFFFF;
                cursor: pointer;
            }
        }

        .permanent {
            margin-top: 80px;
            width: 450px;
            height: 40px;
            border-radius: 10px;
            border: 0px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
        }
    }

    .sectiontwo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;

        .el-checkbox {
            margin-right: 15px;
        }

        span {
            color: #22a6f2;
            cursor: pointer;
        }
    }
}
</style>