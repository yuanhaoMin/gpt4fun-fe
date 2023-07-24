<template>
    <div class="contact">
        <div>任何问题请随时联系我们：</div>
        <div class="label">
            <a href="mailto:lby@bizcamp.com.cn">lby@bizcamp.com.cn</a>
            <a href="mailto:hhf@bizcamp.com.cn">hhf@bizcamp.com.cn</a>
        </div>
        <userAccount class="userAccount"></userAccount>
    </div>
</template>

<script>
import userAccount from '@/components/userAcccountMsg.vue'

export default {
    components: {
        userAccount
    }
}
</script>


<style lang="scss" scoped>
.contact {
    width: 1200px;
    height: 94%;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 40px;
    color: #FFFFFF;
    padding: 40px;
    font-size: 20px;
    box-sizing: border-box;
    position: relative;

    .userAccount {
        position: absolute;
        left: 1090px;
        top: -5px;
        box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.26);
    }

    .label {
        margin-top: 20px;

        a {
            text-decoration: none;
            color: #FFFFFF;
            font-size: 16px;
            margin-right: 60px;
        }
    }

}
</style>