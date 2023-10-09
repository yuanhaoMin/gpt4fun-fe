<template>
    <div class="contact">
        <div>
            线上充值渠道因异常暂时关闭，在此期间如有充值需求，请联系下方邮箱进行人工充值渠道。
        </div>
        <div>任何问题请随时联系我们：</div>
        <div class="red">为您带来的不便，敬请谅解！</div>
        <div class="label">
            <a href="mailto:lby@bizcamp.com.cn">lby@bizcamp.com.cn</a>
            <a href="mailto:hhf@bizcamp.com.cn">hhf@bizcamp.com.cn</a>
            <a href="mailto:gzw@bizcamp.com.cn">gzw@bizcamp.com.cn</a>
            <a href="mailto:syp@bizcamp.com.cn">syp@bizcamp.com.cn</a>
        </div>
        <userAccount class="userAccount"></userAccount>
        <agreement />
        <instructions />
    </div>
</template>

<script setup>
import userAccount from '@/components/userAcccountMsg.vue';
import agreement from "@/components/serviceAgreement/index.vue";
import instructions from "@/components/instructions/index.vue";
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
    .red{
        color: red;
        margin-top: 30px;
    }
    .label {
        margin-top: 50px;
        display: flex;
        flex-direction: column;

        a {
            text-decoration: none;
            color: #FFFFFF;
            font-size: 18px;
            margin-right: 60px;
            display: block;
            width: 50px;
            height: 50px;
        }
        a:hover{
            color: blue;
        }
    }

}
</style>