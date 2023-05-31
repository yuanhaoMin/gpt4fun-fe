<template>
  <div class="home-container">
    <menu-list v-model:isSpend="spend" />
    <div class="right">
      <div class="top">
        <div @click="menuIsSpend" class="ispenddiv">
          &emsp;<el-icon v-show="isShowExpand">
            <Expand />
          </el-icon>
          <el-icon v-show="isShowFold">
            <Fold />
          </el-icon>
        </div>
        <span class="login" @click="logout">退出&emsp;</span>
      </div>
      <!-- 输出内容 -->
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import menuList from "../components/menu.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import store from "../store/common-data";
let spend = ref(false);
let isShowExpand = ref(false);
let isShowFold = ref(true);

let menuIsSpend = () => {
  spend.value = !spend.value;
  isShowExpand.value = !isShowExpand.value;
  isShowFold.value = !isShowFold.value;
};

//未登录，跳转登录页
let router = useRouter();
let logout = () => {
  store.commit("delData");
  router.replace("/login");
};
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100%;
}

.right {
  width: 100%;
}

.top {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid gray;
}

.ispenddiv {
  cursor: pointer;
}

.login {
  cursor: pointer;
}

.login:hover {
  color: blue;
}

.el-icon {
  --color: inherit;
  height: 2em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--color);
  font-size: xx-large;
}
</style>
