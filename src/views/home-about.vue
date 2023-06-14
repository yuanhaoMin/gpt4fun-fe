<template>
    <div class="box">
        <div class="jumpDom">
            <a href="#serve" class="serve">jump-serve</a>
            <a href="#intro" class="intro">jump-intro</a>
            <a href="#advantage" class="advantage">jump-advantage</a>
            <a href="#application" class="application">jump-application</a>
        </div>
        <img src="/bizi/1.png" alt="">
        <img src="/bizi/2.png" alt="">
        <img src="/bizi/3.png" alt="" id="serve">
        <img src="/bizi/4.png" alt="">
        <img src="/bizi/5.png" alt="">
        <img src="/bizi/6.png" alt="">
        <img src="/bizi/7.png" alt="">
        <img src="/bizi/8.png" alt="" id="intro">
        <img src="/bizi/9.png" alt="">
        <img src="/bizi/10.png" alt="">
        <img src="/bizi/11.png" alt="">
        <img src="/bizi/12.png" alt="">
        <img src="/bizi/13.png" alt="" id="advantage">
        <img src="/bizi/14.png" alt="">
        <img src="/bizi/15.png" alt="">
        <img src="/bizi/16.png" alt="" id="application">
        <img src="/bizi/17.png" alt="">
        <img src="/bizi/18.png" alt="">
        <img src="/bizi/19.png" alt="">
        <img src="/bizi/20.png" alt="">
        <img src="/bizi/21.png" alt="">
        <img src="/bizi/22.png" alt="">
        <img src="/bizi/23.png" alt="">
        <img src="/bizi/24.png" alt="">
        <img src="/bizi/25.png" alt="">
        <img src="/bizi/26.png" alt="">
        <img src="/bizi/27.png" alt="">
        <img src="/bizi/28.png" alt="">
    </div>
</template>
   
<script>
export default {
    data() {
        return {
            imgUrl: '/bizi/',
            imgType: '.png',
        }
    },
    methods: {
        //跳转PDF相应模块
        jumpModule(val) {
            document.querySelector('.' + val).click();
        }
    }
};
</script>
   
<style scoped>
.box {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.jumpDom {
    width: 0;
    height: 0;
}

.box img {
    width: 100%;
}

::-webkit-scrollbar {
    width: 20px;
}

::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 30px;
}

::-webkit-scrollbar-track {
    border-radius: 30px;
}
</style>