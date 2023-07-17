<template>
    <div class="about-top">
        <div>
            <img src="/imgs/log-on-images/logo.png" alt="" class="logo">
        </div>
        <div class="right">
            <router-link to="/serviceBackground"
                :class="$route.fullPath == '/serviceBackground' ? 'purple' : ''">服务背景</router-link>
            <router-link to="/introduction" :class="$route.fullPath == '/introduction' ? 'purple' : ''">毕至介绍</router-link>
            <router-link to="/productAdvantages"
                :class="$route.fullPath == '/productAdvantages' ? 'purple' : ''">产品优势</router-link>
            <router-link to="/applicationCases" :class="$route.fullPath == '/applicationCases' ? 'purple' : ''">应用案例</router-link>
            <div class="go-to-bizhi" @click="$router.push('/chat')">前往毕至AI助手</div>
            <div>
                <img src="\imgs\bi-zhi-images/touxiang.png" alt="" class="sculpture" @click="$router.push('/contact')">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  lang="scss" scoped>
.about-top {
    height: 80px;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div {
        cursor: pointer;
    }

    .logo {
        width: 80px;
        height: 40px;
    }

    .right {
        width: 680px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        a {
            color: white;
            text-decoration: none;
        }

        .purple {
            color: purple;
        }

        .go-to-bizhi {
            width: 151px;
            height: 38px;
            background: #FFFFFF;
            border-radius: 24px;
            color: #2F1E67;
            font-weight: 550;
            line-height: 38px;
            text-align: center;
            font-size: 16px;
        }

        .sculpture {
            width: 32px;
        }
    }

}
</style>