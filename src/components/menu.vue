<template>
  <div class="left">
    <el-menu active-text-color="#ffd04b" background-color="#354455" text-color="rgba(255,255,255,0.7)"
      :default-active="indexPath" class="el-menu-vertical-demo" :collapse="isSpend" @open="handleOpen"
      @close="handleClose" router>
      <div>
        <el-menu-item index="chat">
          <el-icon>
            <img src="/imgs/bi-zhi-images/01.png" alt="">
          </el-icon>
          <template #title>毕至AI助手</template>
        </el-menu-item>
        <el-menu-item index="recruit">
          <el-icon>
            <img src="/imgs/bi-zhi-images/02.png" alt="">
          </el-icon>
          <template #title>招聘AI助手</template>
        </el-menu-item>
        <el-menu-item index="scene">
          <el-icon>
            <img src="/imgs/bi-zhi-images/fenlei.png" alt="" class="fl">
          </el-icon>
          <template #title>分类场景AI助手</template>
        </el-menu-item>
        <!-- <el-menu-item index="analysis" v-if="intwo == 1 ? false : true">
          <el-icon>
            <img src="/imgs/bi-zhi-images/03.png" alt="">
          </el-icon>
          <template #title>分析AI助手</template>
        </el-menu-item> -->
        <el-menu-item index="about">
          <el-icon>
            <img src="/imgs/bi-zhi-images/04.png" alt="">
          </el-icon>
          <template #title>关于我们</template>
        </el-menu-item>
        <el-menu-item index="contact">
          <el-icon>
            <img src="/imgs/bi-zhi-images/05.png" alt="">
          </el-icon>
          <template #title>联系我们</template>
        </el-menu-item>
      </div>
    </el-menu>
    <div>
      <img src="/imgs/bi-zhi-images/xitong.png" alt="" class="set-up">
    </div>
  </div>
</template>
  
<script setup>
import { info } from "../api/user";
import { onMounted, ref, watchEffect, toRefs } from "vue";
import { useRoute } from 'vue-router';
import store from "../store/common-data";
let isShowSelectBox = ref(false);
let indexPath = ref('chat');//默认选中菜单项路由
let route = useRoute();
let intwo = ref(1);
//监听当前路由
watchEffect(() => {
  if (route.path) {
    indexPath.value = route.path.slice(1);
    store.state.isShowUserMsg = false
  }
  if (route.path != "/about") {
    isShowSelectBox.value = false
  }
});
let expirationTime = async () => {
  let { data: res } = await info(store.state.username);
  intwo.value = res.access_bitmap;
}

expirationTime();

//菜单栏展开
const handleOpen = (key, keyPath) => { };
//菜单栏折叠
const handleClose = (key, keyPath) => { };

//控制菜单栏是否展开
let { isSpend } = toRefs(store.state);

let isShow = () => {
  isShowSelectBox.value = !isShowSelectBox.value
}

</script>
  
<style lang="scss" scoped>
.prohibit {
  pointer-events: none;
  opacity: 0.3;
}

.set-up {
  width: 40px;
  position: fixed;
  bottom: 50px;
  left: 50px;
  cursor: pointer;
}

.left {
  .el-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0;
    background: #03001b;

    .el-menu-item {
      margin: 5px 0;
      border-radius: 0 100px 100px 0;
      font-size: 16px;

      .fl {
        width: 24px;
      }

      i {
        filter: contrast(0.5);

        img {
          width: 16px;
        }
      }
    }


  }

  .el-menu-item.is-active {
    background: #2F1E67;
    color: #ffffff;
  }

  .el-menu-item.is-active i {
    filter: contrast(1);
  }

  .el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item {
    padding-left: 40px;
  }
}
</style>