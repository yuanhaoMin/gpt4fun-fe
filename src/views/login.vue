<template>
  <div class="box">
    <div style="height: 100vh"></div>
  </div>
  <div class="login">
    <div class="left">
      <img src="/img/beijin.jpg" alt="" class="imgs" />
      <span class="bizi">毕至咨询</span>
    </div>
    <div class="right">
      <p><img src="/img/logo.png" alt="" class="logo" /></p>
      <div>
        <div class="user">
          <img src="/img/acount.png" alt="" class="logonImg" />
          <el-input
            v-model="username"
            placeholder="请输入用户名/手机号"
            clearable
            class="aaa"
          />
        </div>
        <div class="password">
          <img src="/img/password.png" alt="" class="logonImg" />
          <el-input
            v-model="password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </div>
      </div>
      <div>
        <el-button type="primary" plain @click="jump">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../api/login";
const router = useRouter();

const username = ref("demo@bizcamp.com");
const password = ref("999");

let jump = async () => {
  let time = +new Date();
  let res = await login({ username: username.value, password: password.value });
  let aftertime = +new Date();
  console.log("login delay time:", aftertime - time);
  // console.log("loginRes", res);
  if (res.status === 200) {
    router.replace("/chat");
  }
};
</script>>

<style  scoped>
html,
body {
  height: 100%;
}
.box {
  height: 100%;
  opacity: 0.4;
  background-image: url("../../public/img/beijin.jpg");
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
.imgs {
  width: 450px;
  height: 500px;
  border-radius: 15px;
}
.right {
  width: 400px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  border-radius: 0 15px 15px 0;
}
.logo {
  width: 100px;
}
.bizi {
  position: fixed;
  font-family: 华文楷体;
  left: 60px;
  top: 36px;
  font-size: 50px;
}

.user {
  display: flex;
}
.el-input {
  width: 250px;
}
.el-input :deep(div) {
  box-shadow: 0px 0px 0px;
}
.logonImg {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-top: 4px;
  opacity: 0.2;
}
.user,
.password {
  border-bottom: 2px solid lightgray;
}
</style>