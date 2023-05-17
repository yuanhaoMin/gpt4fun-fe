<template>
  <div class="home-container">
    <HomeLeft />
    <HomeMiddle />
  </div>
</template>

<script>
import HomeLeft from './component/HomeLeft.vue'
import HomeMiddle from './component/HomeMiddle.vue'

export default {
  components: {
    HomeLeft,
    HomeMiddle,
  }
}
</script>

<style scoped>
.home-container {
  align-items: flex-start;
  display: flex;
}
</style>