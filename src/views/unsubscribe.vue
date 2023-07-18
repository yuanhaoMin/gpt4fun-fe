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
                <el-checkbox v-model="checked1" />我已阅读并同意<span @click="this.centerDialogVisible = true">《Bizcamp
                    AI用户服务条款》</span>
            </div>
            <div style="text-align: center;">
                <button class="permanent" @click="unregister" :disabled="sleected ? fasle : true"
                    :class="sleected ? 'open' : ''">永久注销</button>
            </div>
        </div>
        <el-dialog v-model="centerDialogVisible" title="Bizcamp AI 服务条款" width="90%" center>
            <div>
                <p>尊敬的客户，欢迎您注册成为本网站用户。在注册前请您仔细阅读如下服务条款：</p>
                本服务协议双方为本网站与本网站客户，本服务协议具有合同效力。您确认本服务协议后，本服务协议即在您和本网站之间产生法律效力。请您务必在注册之前认真阅读全部服务协议内容，如有任何疑问，可向本网站咨询。
                无论您事实上是否在注册之前认真阅读了本服务协议，只要您点击协议正本下方的"注册"按钮并按照本网站注册程序成功注册为用户，您的行为仍然表示您同意并签署了本服务协议。
                <p>协议细则</p>
                <p> 一、本网站服务条款的确认和接纳</p>
                本网站各项服务的所有权和运作权归本网站拥有。
                1.1 本网站运用生成式人工智能技术,为用户提供生成文本内容的服务。
                1.2 用户明确了解本服务生成内容系由人工智能算法完成,存在一定的随机性。本网站会通过不断优化算法,提高生成内容的质量和可靠性,但难以完全避免生成错误或不准确的内容。
                1.3 本服务适用于18岁以上的用户,仅供科学研究、个人学习等合法正当目的使用。用户应合理使用本服务,并承担使用风险。
                <p> 二、用户规范</p>
                2.1 用户在本网站平台上不得输入下列违法信息：
                (1)反对宪法所确定的基本原则的；
                (2)危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
                (3)损害国家荣誉和利益的；
                (4)煽动民族仇恨、民族歧视，破坏民族团结的；
                (5)破坏国家宗教政策，宣扬邪教和封建迷信的；
                (6)散布谣言，扰乱社会秩序，破坏社会稳定的；
                (7)散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
                (8)侮辱或者诽谤他人，侵害他人合法权益的；
                (9)含有法律、行政法规禁止的其他内容的。
                2.2 用户在使用本服务过程中,应当遵守中华人民共和国的相关法律法规,不得利用本服务生成、复制、发布、传播任何违法信息。
                2.3 用户不得利用本服务生成任何侵犯他人知识产权、肖像权、隐私权等合法权益的内容。
                2.4 本网站生成的部分内容可能涉及民族、地域、性别等敏感话题,用户应当审慎使用,并不得利用本服务制造或者传播歧视性内容。
                2.5 对于本网站明知属于未成年人的用户,我们会限制其使用本服务的功能和时长,以降低未成年人沉迷的风险。
                2.6 本网站会对所提供服务的安全性和可靠性进行评估和优化,力求为用户提供高质量的服务。
                <p>三、服务条款的修改</p>
                本网站有权在必要时修改服务条款，本网站服务条款一旦发生变动，将会在重要页面上提示修改内容。如果不同意所改动的内容，用户可以主动取消获得的本网站信息服务。如果用户继续享用本网站信息服务，则视为接受服务条款的变动。本网站保留随时修改或中断服务而不需通知用户的权利。本网站行使修改或中断服务的权利，不需对用户或第三方负责。
                <p>四、个人信息保护</p>
                (1)注册会员有权用本网站提供的服务功能。
                (2)注册会员同意遵守包括但不仅限于《中华人民共和国保守国家秘密法》、 《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、《互联
                网电子公告服务管理规定》、《互联网信息服务管理办法》等在内的法律、法规。
                (3)您注册时有义务提供完整、真实、的个人信息，信息如有变更，应及时更新。
                (4)您成为注册会员须妥善保管用户名和密码，用户登录后进行的一切活动均视为是您本人的行为和意愿，您负全部责任。
                (5)您在使用本网站服务时，同意且接受本网站提供的各类信息服务。
                (6)我们承诺，对您个人的信息和隐私的安全承担保密义务。未经您授权或同意，本网站不会将您的个人资料信息泄露给第三方。用户同意若发现任何非法使用用户帐号或安全漏洞的情况，请立即联系本网站管理员。
                <p>五、拒绝提供担保</p>
                用户明确同意信息服务的使用由用户个人承担风险。本网站不担保服务不会受中断，对服务的及时性，安全性，出错发生都不作担保，但会在能力范围内，避免出错。
                <p>六、有限责任</p>
                本网站对任何直接、间接、偶然、特殊及继起的损害不负责任，这些损害来自：不正当使用本网站服务，或用户传送的信息不符合规定等。这些行为都有可能导致本网站形象受损，所以本网站事先提出这种损害的可能性，同时会尽量避免这种损害的发生。
                <p>七、信息的储存及限制</p>
                本网站有判定用户的行为是否符合本网站服务条款的要求和精神的权利，如果用户违背本网站服务条款的规定，本网站有权中断其服务的帐号。
                <p>八、用户管理</p>
                用户必须遵循：
                (1) 不使用信息服务作非法用途。
                (2) 不干扰或混乱网络服务。
                (3)为保障个人及企业信息安全，禁止用户输入个人隐私或企业隐私。
                (4) 遵守所有使用服务的网络协议、规定、程序和惯例。用户的行为准则是以因特网法规，政策、程序和惯例为根据的。
                <p>九、建议与投诉</p>
                9.1 用户同意保障和维护本网站全体成员的利益，负责支付由用户使用超出服务范围引起的律师费用，违反服务条款的损害补偿费用，其它人使用用户的电脑、帐号和其它知识产权的追索费。
                9.2 用户对本网站服务存在疑问或者投诉,请通过本网站公示的客服联系方式反馈,我们将及时处理。
                9.3 用户应依法对违反本协议及相关法律规定的行为进行投诉、举报,以助于本网站不断改进服务。
                <p>十、结束服务</p>
                用户或本网站可随时根据实际情况中断一项或多项服务。本网站不需对任何个人或第三方负责而随时中断服务。用户若反对任何服务条款的建议或对后来的条款修改有异议，或对本网站服务不满，用户可以行使如下权利：
                (1) 不再使用本网站信息服务。
                (2) 通知本网站停止对该用户的服务。
                结束用户服务后，用户使用本网站服务的权利马上中止。从那时起，用户没有权利、本网站也没有义务传送任何未处理的信息或未完成的服务给用户或第三方。
                <p>十一、通告</p>
                所有发给用户的通告都可通过重要页面的公告或电子邮件或常规的信件传送。服务条款的修改、服务变更、或其它重要事件的通告都会以此形式进行。
                <p>十二、信息内容的所有权</p>
                本网站定义的信息内容包括：文字、软件、声音、相片、录象、图表；在广告中全部内容；本网站为用户提供的其它信息。所有这些内容受版权、商标、标签和其它财产所有权法律的保护。所以，用户只能在本网站和广告商授权下才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。
                <p>十三、免责条款</p>
                13.1 本网站可能会提供第三方平台的访问入口,但不承担第三方平台服务质量及合法性的担保责任。
                13.2 因不可抗力,本网站服务可能会出现中断。造成的损失由用户自行承担。
                13.3 用户应自行承担利用本网站服务产生的各种风险,本网站不承担任何法律及连带责任。
                13.4 本网站有权单方面修改本使用协议,用户需及时关注协议更新。
                <p>十四、生效与争议解决</p>
                14.1 本协议自公布之日起生效。用户使用本网站服务即表示同意并遵守本协议。
                14.2 本协议的解释与争议解决,适用中华人民共和国法律并由本网站所在地法院管辖。
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="centerDialogVisible = false, this.checked1 = true">
                        我同意
                    </el-button>
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                </span>
            </template>
        </el-dialog>
        <userAccount class="userAccount"></userAccount>
    </div>
</template>

<script>
import { deleteuser } from '@/api/user.js';
import { codeApi, verificationApi } from '@/api/mobile-phone.js';
import { getData, removeData } from '../utils/store-crud';
import userAccount from '@/components/userAcccountMsg.vue';
import { ElMessage } from 'element-plus';
export default {
    components: {
        userAccount
    },
    data() {
        return {
            checked1: false,
            centerDialogVisible: false,
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

    :deep(.el-dialog) {
        margin-top: 5vh;
        border-radius: 20px;
        font-size: 16px;
        --el-dialog-bg-color: #331567;

        .el-dialog__title {
            color: #FFFFFF;
            font-size: 20px;
            font-weight: 600;
        }

        .el-dialog__body {
            color: silver;
            font-size: 16px;

            p {
                color: #FFFFFF;
                font-weight: 600;
            }
        }
    }

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