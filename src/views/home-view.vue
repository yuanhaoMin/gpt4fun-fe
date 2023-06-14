<template>
  <div class="home-container">
    <menu-list />
    <div class="right">
      <!-- 输出内容 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import menuList from "../components/menu.vue";
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh;
}

.right {
  width: 100%;
}

.top {
  display: flex;
  justify-content: space-between;
  height: 5%;
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
