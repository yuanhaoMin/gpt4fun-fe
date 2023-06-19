<template>
  <div class="page">
    <topVue></topVue>
    <div class="center">
      <menuList></menuList>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import topVue from "../components/chat-top/top.vue";
import menuList from "../components/menu.vue";

</script>

<style lang="scss" scoped>
.page {
  background: #02001B;
  height: 100vh;
}

.center {
  display: flex;

  .content {
    height: calc(100vh - 100px);
    width: calc(100vw - 350px);
  }
}
</style>
