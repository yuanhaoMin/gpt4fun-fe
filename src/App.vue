<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div
    id="screen"
    :style="{
      width: `${style.width}px`,
      height: `${style.height}px`,
      transform: `${style.transform}`,
    }"
  >
    <RouterView />
  </div>
</template>
<script>
export default {
  name: "ScaleBox",
  props: {},
  data() {
    return {
      style: {
        width: "1920",
        height: "1080",
        transform: "scaleY(1) scaleX(1) translate(-50%, -50%)",
      },
    };
  },
  methods: {
    getScale() {
      const w = window.innerWidth / this.style.width;
      const h = window.innerHeight / this.style.height;
      return { x: w, y: h };
    },
    setScale() {
      const scale = this.getScale();
      this.style.transform =
        "scaleY(" + scale.y + ") scaleX(" + scale.x + ") translate(-50%, -50%)";
    },
  },
  mounted() {
    const that = this;
    that.setScale();
    /* 窗口改变事件 */
    window.addEventListener("resize", function () {
      // console.log("窗口发生变化");
      that.setScale();
    });
  },
};
</script>
 
<style >
#screen {
  z-index: 100;
  transform-origin: 0 0;
  position: fixed;
  left: 50%;
  top: 50%;
  transition: 0.3s;
}
</style>
