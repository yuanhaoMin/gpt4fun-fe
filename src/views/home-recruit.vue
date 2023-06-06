<template>
    <div class="rightView">
        <chatMOdule></chatMOdule>
    </div>
</template>

<script>
import chatMOdule from '../components/home-middle.vue';
export default {
    components: {
        chatMOdule
    }
}
</script>

<style scoped>
.rightView {
    height: 100%;
}
</style>