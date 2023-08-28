<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<script>
//禁止用户ctrl+ “+”缩放页面
document.addEventListener('keydown', function (event) {
  if ((event.ctrlKey === true || event.metaKey === true)
    && (event.which === 61 || event.which === 107
      || event.which === 173 || event.which === 109
      || event.which === 187 || event.which === 189)) {
    event.preventDefault();
  }
}, false);

//禁止用户通过ctrl+滚轮缩放页面
window.addEventListener('mousewheel', function (event) {
  if (event.ctrlKey === true || event.metaKey) {
    event.preventDefault()
  }
}, {
  passive: false
});
// 禁用F12
document.onkeydown = function (e) {
  var currKey = 0, evt = e || window.event;
  currKey = evt.keyCode || evt.which || evt.charCode;
  if (currKey == 123) {
    window.event.cancelBubble = true;
    window.event.returnValue = false;
  }
};
//禁用鼠标右击事件
document.oncontextmenu = function () { return false };

function consoleOpenCallback() {
  window.location.replace('about:blank');
}

!function () {
  const handler = setInterval(() => {
    const before = new Date();
    (function () { }["constructor"]("debugger")())
    const after = new Date();
    const cost = after.getTime() - before.getTime();
    if (cost > 100) {
      consoleOpenCallback();
      clearInterval(handler)
    }
  }, 1500)
}();

</script>
 
<style scoped></style>
