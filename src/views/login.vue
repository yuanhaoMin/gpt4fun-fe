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
                      name="registerUsername" :disabled="isClickSend" />
                  </el-form-item>
                </div>
                <div class="user">
                  <img src="/imgs/log-on-images/mima.png" alt="" class="logonImg" />
                  <el-form-item prop="registerpassword">
                    <el-input v-model="registernew.registerpassword" type="password" placeholder="请输入密码"
                      name="registerpassword" show-password :disabled="isClickSend" />
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
                    @click=" this.$refs.agreement.centerDialogVisible = true;">《用户使用协议》</span>
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
              <div @click="login" :class="this.isShowlogin == true ? 'active' : 'not'">修改密码</div>
            </div>
            <div class="user">
              <img src="/imgs/log-on-images/zhanghu.png" alt="" class="logonImg" />
              <el-input v-model="newmodify.modifyusername" placeholder="请输入手机号" clearable :disabled="isClickSendupda" />
            </div>
            <div class="user">
              <img src="/imgs/log-on-images/mima.png" alt="" class="logonImg" />
              <el-input v-model="newmodify.modifypassword" type="password" placeholder="请输入新密码"
                :disabled="isClickSendupda" show-password />
            </div>
            <div class="elasticity">
              <div class="yzm">
                <img src="/imgs/log-on-images/yzm.png" alt="" class="logonImg" />
                <el-form-item prop="registerCode">
                  <el-input v-model="newmodify.modifycode" placeholder="请输入验证码" name="registercode" maxlength="6"
                    clearable />
                </el-form-item>
              </div>
              <el-button type="info" round @click="sendupda" id="btn">{{ codeNumupda == 60 ? "发送验证码" :
                `(${codeNumupda})秒发送`
              }}</el-button>
            </div>
          </div>
          <div class="login">
            <el-button type="primary" class="upda" plain @click="modify">修改</el-button>
          </div>
          <div class="forget" @click="this.isShowLoginBox = true, this.isShowModify = false">去登陆?</div>
        </div>
      </div>
    </div>
    <agreement ref="agreement" @agreement="getdata"></agreement>
  </div>
</template>

<script>
import { login, register, change } from "../api/user";
import { codeApi, verificationApi } from "../api/mobile-phone"
import { ElMessage } from "element-plus";
import top from "../components/chat-top/top.vue";
import { isMobile } from '@/utils/validate';
import agreement from "@/components/serviceAgreement/index.vue";
export default {
  components: {
    top,
    agreement
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
        modifypassword: '',
        modifycode: '',
      },
      isShowlogin: true,
      isShowRegister: false,
      codeNum: 60,
      codeNumupda: 60,
      isClickSend: false,
      isShowModify: false,
      isShowLoginBox: true,
      isClickSendupda: false,
      reles: {
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
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
    getdata(data) {
      this.checked = data;
    },
    async modify() {
      if (this.newmodify.modifyusername == '' || this.newmodify.modifypassword == '') {
        return ElMessage({
          showClose: true,
          message: "账户/密码不能为空!",
          type: "error",
        });
      };
      if (!this.newmodify.modifycode) return ElMessage({
        showClose: true,
        message: "验证码不能为空!",
        type: "error",
      });
      let code = await verificationApi({
        "phone": this.newmodify.modifyusername,
        "captcha": this.newmodify.modifycode
      })
      if (code == 'Success') {
        let res = await change({ "username": this.newmodify.modifyusername, "password": this.newmodify.modifypassword });
        if (res.status == 200) {
          ElMessage({
            showClose: true,
            message: "修改密码成功,赶快去登陆叭!",
            type: "success",
          });
          this.codeNumupda = 60;
          this.isClickSendupda = false;
          this.newmodify = {};
        }
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
              this.isShowRegister = this.isClickSend = false;
              this.codeNum = 60;
              this.isShowlogin = true;
              this.registernew = {};
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
        this.jump();
      }
    },
    register() {
      this.isShowRegister = true;
      this.isShowlogin = false;
    },
    login() {
      this.isShowRegister = false;
      this.isShowlogin = true;
    },
    async send() {
      if (this.registernew.registerUsername == '' || this.registernew.registerpassword == '') return ElMessage({
        showClose: true,
        message: "手机号/密码不能为空！",
        type: "error",
      });
      if (this.isClickSend == true || this.codeNum != 60) return;
      this.isClickSend = true;
      let clearId = setInterval(() => {
        this.codeNum--;
        if (this.codeNum == 0 || this.isClickSend == false) {
          clearInterval(clearId);
          this.codeNum = 60;
          this.isClickSend = false;
        }
      }, 1000);
      let res = await codeApi({
        "phone": this.registernew.registerUsername,
        "token": "bizcampgpt"
      })
    },
    async sendupda() {
      if (this.newmodify.modifyusername == '' || this.newmodify.modifypassword == '') return ElMessage({
        showClose: true,
        message: "手机号/密码不能为空！",
        type: "error",
      });
      if (this.isClickSendupda == true || this.codeNumupda != 60) return;
      this.isClickSendupda = true;
      let clearId = setInterval(() => {
        this.codeNumupda--;
        if (this.codeNumupda == 0 || this.isClickSendupda == false) {
          clearInterval(clearId);
          this.codeNumupda = 60;
          this.isClickSendupda = false;
        }
      }, 1000);
      let res = await codeApi({
        "phone": this.newmodify.modifyusername,
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
      font-size: 14px;
      color: #22a6f2;
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

  .upda {
    margin-top: 40px !important;
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