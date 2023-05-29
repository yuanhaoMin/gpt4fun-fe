<template>
  <div class="left">
    <el-menu active-text-color="#ffd04b" background-color="#354455" text-color="#fff" default-active="chat"
      class="el-menu-vertical-demo" :collapse="isCollapse.isSpend" @open="handleOpen" @close="handleClose" router>
      <el-menu-item>
        <img src="/img/logo-without-text.png" alt="" class="logo-without-text" v-show="isShowLogo" />
        <div class="logo" v-show="isShowLogoAndWords">
          <img src="/img/logo.png" alt="" style="width: 80px; object-fit: cotain; vertical-align: middle" />
          <span style="font-size: 20px; font-weight: bold; color: white">&emsp;毕至咨询</span>
        </div>
      </el-menu-item>

      <el-menu-item index="chat">
        <el-icon>
          <Message />
        </el-icon>
        <template #title>AI聊天互动</template>
      </el-menu-item>

      <!-- <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>联系我们</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="intru">
            <el-icon><Memo /></el-icon>
            公司简介
          </el-menu-item>
          <el-menu-item index="linkus">
            <el-icon><Plus /></el-icon>
            合作单位
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu> -->
    </el-menu>
  </div>
</template>
  
<script setup>
import { ref, watchEffect } from "vue";
let isShowLogoAndWords = ref(true);
let isShowLogo = ref(false);
//菜单栏展开
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath);
};
//菜单栏折叠
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath);
};
watchEffect(() => {
  if (isCollapse.isSpend) {
    isShowLogoAndWords.value = false;
    isShowLogo.value = true;
  } else {
    isShowLogoAndWords.value = true;
    isShowLogo.value = false;
  }
});
//父组件中传值控制菜单栏是否展开
let isCollapse = defineProps(["isSpend"]);
</script>
  
<style scoped>
.left {
  background: #354455;
  padding: 20px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.logo-without-text {
  width: 40px;
  object-fit: contain;
  margin-left: -10px;
}

.logo {
  width: 296px;
  margin-left: -20px;
}

.el-menu {
  border-right: 0;
}
</style>