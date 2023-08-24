<template>
  <WaterMark text="AI生成内容仅供参考">
    <div class="page">
      <topVue></topVue>
      <div class="center">
        <menuList :class="store.state.isSpend == false ? 'change' : 'unchanged'"></menuList>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </WaterMark>
</template>

<script setup>
import topVue from "../components/chat-top/top.vue";
import menuList from "../components/menu.vue";
import store from "../store/common-data";
import WaterMark from "../components/watermark/watermark.vue";
</script>

<style lang="scss" scoped>
.page {
  background: #02001B;
  height: 100vh;
}

.center {
  display: flex;

  .change {
    width: 258px;
    padding-right: 92px;
    transition: width 0.5s;
  }

  .unchanged {
    width: 60px;
    padding-right: 92px;
    transition: width 0.5s;
  }

  .content {
    height: calc(100vh - 100px);
    width: calc(100vw - 350px);
  }
}
</style>
