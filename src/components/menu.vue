<template>
  <div class="left">
    <el-menu active-text-color="#ffd04b" background-color="#354455" text-color="#fff" :default-active="indexPath"
      class="el-menu-vertical-demo" :collapse="isSpend" @open="handleOpen" @close="handleClose" router>
      <div>
        <el-menu-item class="logosize">
          <img src="/img/logo-white.png" alt="" class="logo-without-text" v-show="isShowLogo" />
          <div class="logo" v-show="isShowLogoAndWords">
            <img src="/img/logo-white.png" alt="" class="logo-white" />
          </div>
        </el-menu-item>
        <el-menu-item index="chat">
          <el-icon>
            <img src="/img/fire-outlined.png" alt="">
          </el-icon>
          <template #title>毕至AI助手</template>
        </el-menu-item>
        <el-menu-item index="recruit">
          <el-icon>
            <img src="/img/adteam-outlined.png" alt="">
          </el-icon>
          <template #title>招聘AI助手</template>
        </el-menu-item>
        <!-- <el-menu-item index="scene">
          <el-icon>
            <img src="/img/fenLei.png" alt="">
          </el-icon>
          <template #title>分类场景助手</template>
        </el-menu-item> -->
        <el-menu-item index="analysis">
          <el-icon>
            <img src="/img/areachart-outlined.png" alt="">
          </el-icon>
          <template #title>分析AI助手</template>
        </el-menu-item>
      </div>
      <div>
        <div class="select-box" v-show="isShowSelectBox">
          <div @click="jumpToPDFModule('serve')">服务背景</div>
          <div @click="jumpToPDFModule('intro')">毕至咨询</div>
          <div @click="jumpToPDFModule('advantage')">产品优势</div>
          <div @click="jumpToPDFModule('application')">产品应用</div>
        </div>
        <el-menu-item index="about" @click="isShow">
          <el-icon>
            <img src="/img/star-icon.png" alt="">
          </el-icon>
          <template #title>关于我们</template>
        </el-menu-item>
        <el-menu-item index="contact">
          <el-icon>
            <img src="/img/send-Icon.png" alt="">
          </el-icon>
          <template #title>联系我们</template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
  
<script setup>
import { ref, toRefs, watchEffect } from "vue";
import { useRoute } from 'vue-router';
import store from "../store/common-data";
import PDFModule from '../views/home-about.vue';

let isShowLogoAndWords = ref(true);
let isShowLogo = ref(false);
let isShowSelectBox = ref(false)
let indexPath = ref('chat');//默认选中菜单项路由
let route = useRoute();
//监听当前路由
watchEffect(() => {
  if (route.path) {
    indexPath.value = route.path.slice(1);
  }
  if (route.path != "/about") {
    isShowSelectBox.value = false
  }
});

//菜单栏展开
const handleOpen = (key, keyPath) => { };
//菜单栏折叠
const handleClose = (key, keyPath) => { };

//控制菜单栏是否展开
let { isSpend } = toRefs(store.state);

let isShow = () => {
  isShowSelectBox.value = !isShowSelectBox.value
}
//跳转PDF对应模块
let jumpToPDFModule = (val) => {
  PDFModule.methods.jumpModule(val);
}
</script>
  
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  background-image: linear-gradient(#0e133e, #24307e, #0e133e);
  height: 100%;
  width: 320px;
  border-radius: 30px;
}

.logosize {
  height: 125px;
}

.logo-without-text {
  width: 40px;
  object-fit: contain;
  margin-left: -10px;
}

.logo-white {
  width: 60%;
}

.logo {
  text-align: center;
  margin-left: -20px;
}

.el-menu {
  border-right: 0;
  height: 100%;
  background-image: linear-gradient(#0e133e, #24307e, #0e133e);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  margin-left: -1px;
}

.el-menu-item {
  justify-content: center;
  border-radius: 30px;
  font-size: 20px;
  box-shadow: 0px 0px 1px 0px slategrey;
  margin-bottom: 20px;

}

.el-menu-item.is-active {
  background-color: #d8d8d8;
  color: black;
}

.el-menu-item.is-active i {
  filter: invert(1);
}

.el-icon img {
  width: 30px;
}

.select-box div {
  border-radius: 30px;
  font-size: 20px;
  color: white;
  box-shadow: 0px 0px 1px 0px slategrey;
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>