<script setup>
import {
    ref,
    reactive,
    toRefs,
    defineProps,
    watchEffect,
    onMounted,
    onUnmounted,
} from "vue";
import createWaterMark from "@/utils/createWatermark.js";

const props = defineProps({
    text: {
        type: String,
        required: true,
        default: "watermark",
    },
    fontSize: {
        type: Number,
        default: 30,
    },
    gap: {
        // 间隙
        type: Number,
        default: 20,
    },
});

const wm = createWaterMark(props);
const parentRef = ref(null);
let div;
const flag = ref(0);
watchEffect(() => {
    flag.value;
    if (!parentRef.value) {
        return;
    }
    div && div.remove(); // 消除div原有值
    const { base64, styleSize } = wm.value;
    div = document.createElement("div");
    // div style
    div.style.backgroundImage = `url(${base64})`;
    div.style.backgroundSize = `${styleSize}px ${styleSize}px`;
    div.style.backgroundRepeat = "repeat";
    div.style.zIndex = 9999;
    div.style.position = "absolute";
    div.style.inset = 0; // 子元素与父元素的距离
    div.style.pointerEvents = "none"; // 阻止元素事件
    parentRef.value.appendChild(div); // 把div加到父元素中
});

let ob;
onMounted(() => {
    // 监控元素变化
    ob = new MutationObserver((records) => {
        for (const record of records) {
            // 删除
            for (const dom of record.removedNodes) {
                if (dom === div) { // 如果删除的是水印元素div
                    flag.value++; // 只要flag变化就会触发重新生成水印
                    return;
                }
            }
            // 修改
            if (record.target === div) {
                // 修改的是水印的div时
                flag.value++;
                return;
            }
        }
    });
    // 监听
    ob.observe(parentRef.value, {
        childList: true, // 是否监控元素内容
        attributes: true, // 是否监控本身属性
        subtree: true, // 是否监控子树
    });
});

onUnmounted(() => {
    ob && ob.disconnect(); // 取消监听
    div = null; // 因为div是一个全局变量，需要回收内存，防止内存泄露
});
</script>
 
<template>
    <div class="water-mark-warp" ref="parentRef">
        <slot></slot>
        <!-- 添加一个盒子，填满整个区域，给一个重复的水印背景图。 -->
    </div>
</template>
 
<style lang='scss' scoped>
.water-mark-warp {
    position: relative;
}
</style>