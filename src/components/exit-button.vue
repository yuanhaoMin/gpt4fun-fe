<template>
    <div class="top">
        <div>
            <img src="/img/shouqi.png" alt="" class="imgs-size" @click='spendOrContract'>
        </div>
        <div>
            <img src="/img/back.png" alt="" @click="logout" class="imgs-size">
            <img src="/img/home.png" alt="" class="imgs-size" @click="chat">
        </div>
    </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import { useRouter } from "vue-router";
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

//菜单栏 收缩/展开
let spendOrContract = () => {
    store.commit('isContract');
};
let chat = () => {
    router.push("/chat");
}
</script>

<style scoped>
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
}

.imgs-size {
    width: 40px;
    margin-right: 10px;
}

img {
    cursor: pointer;
}
</style>