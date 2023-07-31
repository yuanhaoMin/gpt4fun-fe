<template>
    <keep-alive>
        <div class="rightView">
            <chatMOdule></chatMOdule>
        </div>
    </keep-alive>
</template>

<script setup>
import chatMOdule from '../components/home-middle.vue';
</script>

<style lang="scss" scoped>
.rightView {
    height: 100%;
}
</style>