<template>
  <div class="box">
    <div style="height: 100vh"></div>
  </div>
  <div class="login">
    <div class="right">
      <p><img src="/img/logo.png" alt="" class="logo" /></p>
      <div>
        <div class="user">
          <img src="/img/username.png" alt="" class="logonImg" />
          <el-input v-model="username" placeholder="请输入用户名/手机号" clearable />
        </div>
        <div class="password">
          <img src="/img/password.png" alt="" class="logonImg" />
          <el-input v-model="password" type="password" placeholder="请输入密码" show-password />
        </div>
      </div>
      <div class="logon">
        <el-button type="primary" plain @click="jump">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../api/login";
import { ElMessage } from "element-plus";

import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const username = ref("hhf@bizcamp.com");
const password = ref("999");

let jump = async () => {
  if (username.value == "" || password.value == "") {
    ElMessage.error("账户或密码不能为空！");
    return;
  } else {
    let res = await login({
      username: username.value,
      password: password.value,
    });
    if (res.status == 200) {
      const credentials = `${username}:${password}`;
      const encodedCredentials = btoa(credentials);
      store.commit("token", encodedCredentials);
      store.commit("username", username.value);

      ElMessage({
        showClose: true,
        message: "登录成功！",
        type: "success",
      });
      router.replace("/");
    } else {
      return;
    }
  }
};
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

.user,
.password {
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
</style>