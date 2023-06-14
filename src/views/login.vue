<template>
  <div class="box">
    <div style="height: 100vh"></div>
  </div>
  <div class="login">
    <div class="right" v-show="isShowLogin" @keydown="onKeyDown">
      <p><img src="/img/logo.png" alt="" class="logo" /></p>
      <div>
        <div class="user">
          <img src="/img/username.png" alt="" class="logonImg" />
          <el-input v-model="username" placeholder="请输入用户名/手机号" clearable name="username" />
        </div>
        <div class="user">
          <img src="/img/password.png" alt="" class="logonImg" />
          <el-input v-model="password" type="password" placeholder="请输入密码" name="password" show-password />
        </div>
      </div>
      <div class="logon">
        <el-button type="primary" plain @click="jump" ref="jumplogin">登录</el-button>
      </div>
      <div class="xin" @click="xin">
        您是新用户？很高兴认识您，注册请点击这里。
      </div>
    </div>
    <div class="right" v-show="isShownewRegister">
      <p><img src="/img/logo.png" alt="" class="logo" /></p>
      <div>
        <div class="user">
          <el-input v-model="registerUsername" placeholder="请输入手机号注册" clearable name="registerUsername" />
        </div>
        <div class="user">
          <el-input v-model="registerpassword" type="password" placeholder="设置密码" show-password name="registerpassword" />
        </div>
        <div class="user">
          <el-input v-model="confirmPassword" type="password" placeholder="确认密码" show-password name="confirmPassword" />
        </div>
      </div>
      <div class="logon">
        <el-button type="primary" plain @click="newRegister">注册</el-button>
      </div>
      <div class="xin" @click="lo">
        已经有账户了?<span class="lo">登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "../api/login";
import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      username: "",
      password: "",
      registerUsername: '',
      registerpassword: "",
      confirmPassword: '',
      isShownewRegister: false,
      isShowLogin: true
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
  beforeUnmount() {
  },
  methods: {
    lo() {
      this.isShownewRegister = false
      this.isShowLogin = true
    },
    xin() {
      this.isShownewRegister = true
      this.isShowLogin = false
    },
    async newRegister() {
      let phone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      if (!phone.test(this.registerUsername)) {
        return ElMessage.error("请填写正确的手机号!");
      } else if (this.registerpassword != this.confirmPassword) {
        return ElMessage.error("两次输入的密码不相同!");
      }
      let res = await register({
        username: this.registerUsername,
        password: this.confirmPassword,
      })
      if (res.status == 200) {
        await login({
          username: this.registerUsername,
          password: this.confirmPassword,
        });
        const credentials = `${this.registerUsername}:${this.confirmPassword}`;
        const encodedCredentials = btoa(credentials);
        this.$store.commit("token", encodedCredentials);
        this.$store.commit("username", this.registerUsername);
        ElMessage({
          showClose: true,
          message: "登录成功！",
          type: "success",
        });
        this.$router.replace("/chat");
      }
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

    }
  }
}
</script>

<style  scoped>
html,
body {
  height: 100%;
}

.box {
  height: 100%;
  opacity: 0.4;
  background-image: url("/img/background.jpg");
  background-size: cover;
  background-attachment: fixed;
}

.login {
  width: 900px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  width: 400px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  border-radius: 15px 15px 15px 15px;
}

.logon {
  width: 50%;
}

.logonImg {
  width: 30px;
  height: 30px;
  opacity: 0.2;
}

.user {
  border-bottom: 2px solid lightgray;
  display: flex;
  height: 50px;
  margin: 10px;
  align-items: center;
}

.logo {
  width: 150px;
}

.el-input {
  width: 250px;
}

.el-input :deep(div) {
  box-shadow: 0px 0px 0px;
}

.el-button {
  width: 100%;
}

.el-button>span {
  width: 100px;
}

.xin {
  cursor: pointer;
  font-size: 12px;
  color: lightgray;
}

.xin:hover {
  color: blue;
}

.lo {
  color: aqua;
}
</style>