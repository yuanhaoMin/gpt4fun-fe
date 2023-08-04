<template>
    <div class="chat-top">
        <div>
            <img src="/imgs/log-on-images/shousuo.png" alt="" class="sousuo" v-show="$route.path != '/login'"
                @click='spendOrContract'>
            <img src="/imgs/log-on-images/logo.png" alt="">
        </div>
        <div>
            <el-tooltip class="box-item" effect="dark" content="用户使用说明书" placement="left">
                <img src="\imgs\bi-zhi-images/illustrate.png" alt="" v-show="$route.path != '/login'" @click="illustrate">
            </el-tooltip>
            <img src="\imgs\bi-zhi-images/touxiang.png" alt="" @click="isShowUserAccount" class="sculpture"
                v-if="$route.path != '/login'">
            <img src=" \imgs\bi-zhi-images/tuichu.png" alt="" @click="logout" v-if="$route.path != '/login'">
            <img src="\imgs\bi-zhi-images/zhuye.png" alt="退出" @click="$router.push('/')" v-if="$route.path == '/login'">
        </div>
    </div>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from "vue-router";
import store from "../../store/common-data";
let router = useRouter();

let logout = () => {
    ElMessageBox.confirm(
        '亲爱的用户,您确定要退出吗？',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(() => {
        store.commit("delData");
        router.replace("/");
        ElMessage({
            type: 'success',
            message: '退出成功！',
        })
    })
};
//是否显示用户信息
let isShowUserAccount = () => {
    store.commit('showUserMsg')
}
//菜单栏 收缩/展开
let spendOrContract = () => {
    store.commit('isContract');
};
let illustrate = () => {
    store.commit('illustrate');
    console.log(1);
};
</script>

<style  lang="scss" scoped>
.chat-top {
    display: flex;
    justify-content: space-between;
    height: 80px;

    .sousuo {
        width: 24px;
        height: 18px;
    }

    img {
        cursor: pointer;
    }

    div:first-child {
        display: flex;
        align-items: center;

        margin-left: 40px;


        img:first-child {
            width: 30px;
            height: 30px;
            margin-right: 22px;
        }

        img:not(:first-child) {
            width: 120px;
            height: 60px;
        }
    }

    div:not(:first-child) {
        display: flex;
        align-items: center;
        margin-right: 40px;

        .sculpture {
            width: 45px;
            height: 45px;
        }

        img {
            margin-right: 30px;
            width: 30px;
            height: 30px;

        }
    }

    el-message-box {
        border: 0;
        background: red !important;
    }

}
</style>