<template>
  <div class="box">
    <top />
    <div class="login-box">
      <div><img src="/imgs/log-on-images/logo-.png" alt="" class="logo"></div>
      <div class="login-box-log">
        <div class="account-number">
          <div @click="login" :class="this.isShowlogin == true ? 'active' : 'not'">账号登录</div>
          <div @click="register" :class="this.isShowRegister == true ? 'active' : 'not'">注册账号</div>
        </div>
        <div v-show="isShowlogin">
          <div @keydown="onKeyDown">
            <div class="user">
              <img src="/imgs/log-on-images/zhanghu.png" alt="" class="logonImg" />
              <el-input v-model="username" placeholder="请输入用户名/手机号" clearable name="username" />
            </div>
            <div class="user">
              <img src="/imgs/log-on-images/mima.png" alt="" class="logonImg" />
              <el-input v-model="password" type="password" placeholder="请输入密码" name="password" show-password />
            </div>
          </div>
          <div class="login">
            <el-button type="primary" plain @click="jump" ref="jumplogin">登录</el-button>
          </div>
        </div>
        <div v-show="isShowRegister">
          <div>
            <div class="user">
              <img src="/imgs/log-on-images/zhanghu.png" alt="" class="logonImg" />
              <el-input v-model="registerUsername" placeholder="请输入手机号注册" clearable name="registerUsername" />
            </div>
            <div class="user">
              <img src="/imgs/log-on-images/mima.png" alt="" class="logonImg" />
              <el-input v-model="registerpassword" type="password" placeholder="请输入密码" name="registerpassword"
                show-password />
            </div>
            <div class="elasticity">
              <div class="yzm">
                <img src="/imgs/log-on-images/yzm.png" alt="" class="logonImg" />
                <el-input v-model="registerCode" placeholder="请输入验证码" name="registercode" maxlength="6" clearable />
              </div>
              <el-button type="info" round @click="send">发送验证码</el-button>
            </div>
          </div>
          <div class="register">
            <el-button type="primary" plain @click="newRegister">注册</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "../api/user";
import { codeApi, verificationApi } from "../api/mobile-phone"
import { ElMessage } from "element-plus";
import top from "../components/chat-top/top.vue";
export default {
  components: {
    top
  },
  data() {
    return {
      username: "hhf@bizcamp.com",
      password: "999",
      registerUsername: '',
      registerpassword: "",
      registerCode: '',
      isShowlogin: true,
      isShowRegister: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.username.length == 0) {
        document.getElementsByName('username')[0].focus()
      } else if (this.password.length == 0) {
        document.getElementsByName('password')[0].focus()
      }

    })
  },
  methods: {
    async newRegister() {
      let phone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      if (!phone.test(this.registerUsername)) {
        return ElMessage.error("请填写正确的手机号!");
      }
      let res = await verificationApi({
        "phone": this.registerUsername,
        "captcha": this.registerCode
      })
      console.log(res);
      // let res = await register({
      //   username: this.registerUsername,
      //   password: this.registerpassword,
      // })
      // if (res.status == 200) {
      //   await login({
      //     username: this.registerUsername,
      //     password: this.registerpassword,
      //   });
      //   const credentials = `${this.registerUsername}:${this.registerpassword}`;
      //   const encodedCredentials = btoa(credentials);
      //   this.$store.commit("token", encodedCredentials);
      //   this.$store.commit("username", this.registerUsername);
      //   ElMessage({
      //     showClose: true,
      //     message: "登录成功！",
      //     type: "success",
      //   });
      //   this.$router.replace("/chat");
      // }
    },
    async jump() {
      if (this.username == "" || this.password == "") {
        ElMessage.error("账户或密码不能为空！");
        return;
      } else {
        let res = await login({
          username: this.username,
          password: this.password,
        });
        if (res.status == 200) {
          const credentials = `${this.username}:${this.password}`;
          const encodedCredentials = btoa(credentials);
          this.$store.commit("token", encodedCredentials);
          this.$store.commit("username", this.username);
          ElMessage({
            showClose: true,
            message: "登录成功！",
            type: "success",
          });
          this.$router.replace("/chat");
        } else {
          return;
        }
      }
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
      let res = await codeApi({
        "phone": "17600669600",
        "token": "bizcampgpt"
      })
      console.log(res);
    }
  }
}
</script>

<style  lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  background: url(/imgs/log-on-images/01.png) no-repeat center;
  background-size: cover;

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
    margin-top: 140px;
    background: #311a67;
    color: white;
  }

  .register>.el-button {
    width: 100%;
    padding: 20px 0;
    border-radius: 30px;
    margin-top: 70px;
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
</style>