<template>
  <div class="lobox">
    <top />
    <div class="login-box">
      <div><img src="/imgs/log-on-images/logo-.png" alt="" class="logo"></div>
      <div class="login-box-log">
        <div v-show="isShowLoginBox">
          <div class="account-number">
            <div @click="login" :class="this.isShowlogin == true ? 'active' : 'not'">账号登录</div>
            <div @click="register" :class="this.isShowRegister == true ? 'active' : 'not'">注册账号</div>
          </div>
          <div v-show="isShowlogin">
            <el-form ref="formRef" :model="userForm" :rules="reles">
              <div @keydown="onKeyDown">
                <div class="user">
                  <img src="/imgs/log-on-images/zhanghu.png" alt="" class="logonImg" />
                  <el-form-item prop="username">
                    <el-input v-model="userForm.username" placeholder="请输入用户名/手机号" clearable name="username" />
                  </el-form-item>
                </div>
                <div class="user">
                  <img src="/imgs/log-on-images/mima.png" alt="" class="logonImg" />
                  <el-form-item prop="password">
                    <el-input v-model="userForm.password" type="password" placeholder="请输入密码" name="password"
                      show-password />
                  </el-form-item>
                </div>
              </div>
              <div class="login">
                <el-button type="primary" plain @click="jump()" ref="jumplogin">登录</el-button>
              </div>
              <div class="forget" @click="this.isShowLoginBox = false, this.isShowModify = true">忘记密码?</div>
            </el-form>
          </div>
          <div v-show="isShowRegister">
            <el-form :rules="reles" :model="registernew" ref="registerForm">
              <div>
                <div class="user">
                  <img src="/imgs/log-on-images/zhanghu.png" alt="" class="logonImg" />
                  <el-form-item prop="registerUsername">
                    <el-input v-model="registernew.registerUsername" placeholder="请输入手机号注册" clearable
                      name="registerUsername" :disabled="iptdisabled" />
                  </el-form-item>
                </div>
                <div class="user">
                  <img src="/imgs/log-on-images/mima.png" alt="" class="logonImg" />
                  <el-form-item prop="registerpassword">
                    <el-input v-model="registernew.registerpassword" type="password" placeholder="请输入密码"
                      name="registerpassword" show-password :disabled="iptdisabled" />
                  </el-form-item>
                </div>
                <div class="elasticity">
                  <div class="yzm">
                    <img src="/imgs/log-on-images/yzm.png" alt="" class="logonImg" />
                    <el-form-item prop="registerCode">
                      <el-input v-model="registernew.registerCode" placeholder="请输入验证码" name="registercode" maxlength="6"
                        clearable />
                    </el-form-item>
                  </div>
                  <el-button type="info" round @click="send" id="btn">{{ codeNum == 60 ? "发送验证码" : `(${codeNum})秒发送`
                  }}</el-button>
                </div>
                <div class="agreement">
                  <el-checkbox v-model="checked">我同意并签署了本服务协议。</el-checkbox><span
                    @click="this.centerDialogVisible = true">《服务协议》</span>
                </div>
              </div>
              <div class="register">
                <el-button type="primary" plain @click="newRegister">注册</el-button>
              </div>
            </el-form>
          </div>
        </div>
        <div v-show="isShowModify">
          <div @keydown="onKeyDown">
            <div class="account-number">
              <div @click="login" :class="this.isShowlogin == true ? 'active' : 'not'">修改账号密码</div>
            </div>
            <div class="user">
              <img src="/imgs/log-on-images/zhanghu.png" alt="" class="logonImg" />
              <el-input v-model="newmodify.modifyusername" placeholder="请输入修改用户名/手机号" clearable />
            </div>
            <div class="user">
              <img src="/imgs/log-on-images/mima.png" alt="" class="logonImg" />
              <el-input v-model="newmodify.modifypassword" type="password" placeholder="请输入修改密码" show-password />
            </div>
          </div>
          <div class="login">
            <el-button type="primary" plain @click="modify">修改</el-button>
          </div>
          <div class="forget" @click="this.isShowLoginBox = true, this.isShowModify = false">去登陆?</div>

        </div>
      </div>
    </div>
    <el-dialog v-model="centerDialogVisible" title="服务条款" width="90%" center>
      <div>
        <p>尊敬的客户，欢迎您注册成为本网站用户。在注册前请您仔细阅读如下服务条款：</p>
        本服务协议双方为本网站与本网站客户，本服务协议具有合同效力。您确认本服务协议后，本服务协议即在您和本网站之间产生法律效力。请您务必在注册之前认真阅读全部服务协议内容，如有任何疑问，可向本网站咨询。
        无论您事实上是否在注册之前认真阅读了本服务协议，只要您点击协议正本下方的"注册"按钮并按照本网站注册程序成功注册为用户，您的行为仍然表示您同意并签署了本服务协议。
        <p>协议细则</p>
        <p> 一、本网站服务条款的确认和接纳</p>
        本网站各项服务的所有权和运作权归本网站拥有。
        <p> 二、用户在本网站平台上不得输入下列违法信息：</p>
        (1)反对宪法所确定的基本原则的；
        (2)危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
        (3)损害国家荣誉和利益的；
        (4)煽动民族仇恨、民族歧视，破坏民族团结的；
        (5)破坏国家宗教政策，宣扬邪教和封建迷信的；
        (6)散布谣言，扰乱社会秩序，破坏社会稳定的；
        (7)散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
        (8)侮辱或者诽谤他人，侵害他人合法权益的；
        (9)含有法律、行政法规禁止的其他内容的。
        <p>三、服务条款的修改</p>
        本网站有权在必要时修改服务条款，本网站服务条款一旦发生变动，将会在重要页面上提示修改内容。如果不同意所改动的内容，用户可以主动取消获得的本网站信息服务。如果用户继续享用本网站信息服务，则视为接受服务条款的变动。本网站保留随时修改或中断服务而不需通知用户的权利。本网站行使修改或中断服务的权利，不需对用户或第三方负责。
        <p>四、用户的帐号、密码和安全性</p>
        (1)注册会员有权用本网站提供的服务功能。
        (2)注册会员同意遵守包括但不仅限于《中华人民共和国保守国家秘密法》、 《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、《互联 网电子公告服务管理规定》、《互联网信息服务管理办法》等在内的法律、法规。
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
        <p>九、保障</p>
        用户同意保障和维护本网站全体成员的利益，负责支付由用户使用超出服务范围引起的律师费用，违反服务条款的损害补偿费用，其它人使用用户的电脑、帐号和其它知识产权的追索费。
        <p>十、结束服务</p>
        用户或本网站可随时根据实际情况中断一项或多项服务。本网站不需对任何个人或第三方负责而随时中断服务。用户若反对任何服务条款的建议或对后来的条款修改有异议，或对本网站服务不满，用户可以行使如下权利：
        (1) 不再使用本网站信息服务。
        (2) 通知本网站停止对该用户的服务。
        结束用户服务后，用户使用本网站服务的权利马上中止。从那时起，用户没有权利、本网站也没有义务传送任何未处理的信息或未完成的服务给用户或第三方。
        <p>十一、通告</p>
        所有发给用户的通告都可通过重要页面的公告或电子邮件或常规的信件传送。服务条款的修改、服务变更、或其它重要事件的通告都会以此形式进行。
        <p>十二、信息内容的所有权</p>
        本网站定义的信息内容包括：文字、软件、声音、相片、录象、图表；在广告中全部内容；本网站为用户提供的其它信息。所有这些内容受版权、商标、标签和其它财产所有权法律的保护。所以，用户只能在本网站和广告商授权下才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。
        <p>十三、法律</p>
        本网站信息服务条款要与中华人民共和国的法律解释一致。用户和本网站一致同意服从本网站所在地有管辖权的法院管辖。
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="centerDialogVisible = false, this.checked = true">
            我同意
          </el-button>
          <el-button @click="centerDialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { login, register, change } from "../api/user";
import { codeApi, verificationApi } from "../api/mobile-phone"
import { ElMessage } from "element-plus";
import top from "../components/chat-top/top.vue";
import { isMobile } from '@/utils/validate';
export default {
  components: {
    top
  },
  data() {
    const validateMobile = (rule, value, callback) => {
      if (isMobile(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不正确'))
      }
    }
    return {
      centerDialogVisible: false,
      checked: false,
      userForm: {
        username: "",
        password: "",
      },
      registernew: {
        registerUsername: '',
        registerpassword: "",
        registerCode: ''
      },
      newmodify: {
        modifyusername: '',
        modifypassword: ''
      },
      isShowlogin: true,
      isShowRegister: false,
      codeNum: 60,
      isClickSend: false,
      isShowModify: false,
      isShowLoginBox: true,
      iptdisabled: false,
      reles: {
        username: [
          { required: true, message: '请输入用户名/手机号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        registerUsername: [
          { required: true, message: '请输入手机号注册', trigger: 'blur' },
          { validator: validateMobile, trigger: 'blur' }
        ],
        registerpassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度在6~16之间' },
        ],
        registerCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ]
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.userForm.username.length == 0) {
        document.getElementsByName('username')[0].focus()
      } else if (this.userForm.password.length == 0) {
        document.getElementsByName('password')[0].focus()
      }
    })
  },
  methods: {
    async modify() {
      if (this.newmodify.modifyusername == '' || this.newmodify.modifypassword == '') {
        return ElMessage({
          showClose: true,
          message: "账户/密码不能为空!",
          type: "error",
        });
      };
      let res = await change({ "username": this.newmodify.modifyusername, "password": this.newmodify.modifypassword });
      if (res.status == 200) {
        ElMessage({
          showClose: true,
          message: "修改密码成功,赶快去登陆叭!",
          type: "success",
        });
        this.newmodify = {}
      }

    },
    async newRegister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          if (!this.checked) {
            return ElMessage({
              showClose: true,
              message: "需同意签署本服务协议才能注册!",
              type: "error",
            });
          }
          let code = verificationApi({
            "phone": this.registernew.registerUsername,
            "captcha": this.registernew.registerCode
          }).then(value => {
            register({
              username: this.registernew.registerUsername,
              password: this.registernew.registerpassword,
            }).then(value => {
              ElMessage({
                showClose: true,
                message: "注册成功!",
                type: "success",
              });
              this.isShowRegister = false
              this.isShowlogin = true
            })
          })
        } else {
          return
        }
      })
    },
    async jump() {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          login({
            username: this.userForm.username,
            password: this.userForm.password,
          }).then(value => {
            const credentials = `${this.userForm.username}:${this.userForm.password}`;
            const encodedCredentials = btoa(credentials);
            this.$store.commit("token", encodedCredentials);
            this.$store.commit("username", this.userForm.username);
            ElMessage({
              showClose: true,
              message: "登录成功！",
              type: "success",
            });
            this.$router.replace("/chat");
          });
        } else {
          return
        }
      })
    },
    onKeyDown(e) {
      if (e.keyCode == 13) {
        this.jump()
      }
    },
    register() {
      this.isShowRegister = true
      this.isShowlogin = false
    },
    login() {
      this.isShowRegister = false
      this.isShowlogin = true
    },

    async send() {
      if (this.registernew.registerUsername == '') return ElMessage({
        showClose: true,
        message: "手机号不能为空",
        type: "error",
      });
      this.iptdisabled = true
      if (this.isClickSend == true || this.codeNum != 60) return;
      this.isClickSend = true;
      let clearId = setInterval(() => {
        this.codeNum--;
        if (this.codeNum == 0) {
          clearInterval(clearId);
          this.codeNum = 60;
          this.iptdisabled = this.isClickSend = false;
        }
      }, 1000);
      let res = await codeApi({
        "phone": this.registernew.registerUsername,
        "token": "bizcampgpt"
      })
    }
  }
}
</script>

<style  lang="scss" scoped>
.lobox {
  width: 100%;
  height: 100vh;
  background: url(/imgs/log-on-images/01.png) no-repeat center;
  background-size: cover;

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

  .agreement {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    :deep(.el-checkbox__input.is-checked+.el-checkbox__label) {
      color: #311a67;
    }

    :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
      background: #311a67;
    }

    span {
      font-size: 16px;
      color: chocolate;
      cursor: pointer;
    }
  }

  .forget {
    color: #311a67;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    height: 40px;
    cursor: pointer;
    line-height: 40px;
  }

  .login-box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 225px;

    .logo {
      width: 400px;
      height: 203px;
    }

    .login-box-log {
      padding: 30px;
      box-sizing: border-box;
      width: 450px;
      height: 433px;
      background: #FFFFFF;
      border-radius: 40px;

      .account-number {
        display: flex;
        font-size: 24px;
        font-weight: 600;
        justify-content: center;
        margin-bottom: 40px;

        div {
          cursor: pointer;
        }

        .active {
          color: #311a67;
        }

        &>div:first-child {
          margin-right: 30px;
        }

        .not {
          color: lightgray;
        }
      }

      .yzm {
        width: 200px;
        height: 50px;
        background: #F5F5F5;
        border-radius: 25px;
        border: 1px solid #CCCCCC;
        display: flex;
        align-items: center;
        margin-top: 20px;

        .logonImg {
          width: 20px;
          height: 20px;
          margin-left: 15px;
        }

        &:deep(.el-input__wrapper) {
          box-shadow: none;
          background-color: transparent;
        }

        &:deep(.el-form-item__error) {
          left: 7%;
        }
      }

      .user {
        width: 389px;
        height: 50px;
        background: #F5F5F5;
        border-radius: 25px;
        border: 1px solid #CCCCCC;
        display: flex;
        align-items: center;
        margin-top: 20px;

        .logonImg {
          width: 20px;
          height: 20px;
          margin-left: 15px;
        }

        &:deep(.el-input__wrapper) {
          box-shadow: none;
          background-color: transparent;
        }
      }
    }
  }

  .login>.el-button {
    width: 100%;
    padding: 20px 0;
    border-radius: 30px;
    margin-top: 110px;
    background: #311a67;
    color: white;
  }

  .register>.el-button {
    width: 100%;
    padding: 20px 0;
    border-radius: 30px;
    margin-top: 20px;
    background: #311a67;
    color: white;
  }

  .elasticity {
    display: flex;
    align-items: center;

    .el-button {
      margin-left: 25px;
      width: 120px;
      height: 36px;
      margin-top: 20px;
    }
  }
}

.el-form-item {
  width: 100%;
  margin: 0;

  &:deep(.el-form-item__error) {
    top: 80%;
    left: 3%;
  }
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>