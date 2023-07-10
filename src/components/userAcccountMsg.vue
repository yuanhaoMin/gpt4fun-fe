<template>
    <div class="usermsg-userAccount" v-show="$store.state.isShowUserMsg">
        <div class="card">
            <div class="top">
                <img src="/imgs/bi-zhi-images/touxiang.png" alt="" class="free photo">
                <div class="usernameAndAccount">
                    <p>账号：{{ user }}</p>
                </div>
            </div>
            <div class="center">
                <div class="purplePart professionalVersion" v-if="role == '15'">
                    <div>
                        <p>专业版</p>
                        <p>到期时间：{{ overtime }}</p>
                    </div>
                    <div>
                        <button @click="this.$router.push('/price')">续费专业版!</button>
                    </div>
                </div>
                <div class="purplePart freeVersion" v-if="role == '1'">
                    <div>
                        <p>普通版</p>
                        <p>到期时间：{{ overtime }}</p>
                    </div>
                    <div>
                        <button @click="this.$router.push('/price')">开通专业版!</button>
                    </div>
                </div>
                <div class="purplePart freeVersion" v-if="role == '31'">
                    <div>
                        <p>终身版</p>
                        <p>永久免费使用</p>
                    </div>
                    <div>
                        <button>永久免费使用!</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="back">
            <span @click="refund">退出登录</span>
            <img src="/imgs/bi-zhi-images/back.png" alt="" @click="refund">
        </div>
    </div>
</template>

<script>
import { info } from "../api/user";
import { ElMessage, ElMessageBox } from 'element-plus'
import { transformTimestamp } from "../utils/time-format"
export default {
    data() {
        return {
            isShowUserAccount: false,
            user: this.$store.state.username,
            account: '368512335335',
            overtime: '2023年12月24日',
            role: 'free',
        }
    },
    created() {
        this.expiration()
    },
    methods: {
        async expiration() {
            let { data: res } = await info(this.$store.state.username);
            this.role = res.access_bitmap
            let time = transformTimestamp(res.subscription_end_time)
            this.overtime = time
        },
        refund() {
            ElMessageBox.confirm(
                '亲爱的用户,您确定要退出吗？',
                {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            ).then(() => {
                this.$store.commit("delData");
                this.$router.replace("/");
                ElMessage({
                    type: 'success',
                    message: '退出成功！',
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.usermsg-userAccount {
    width: 420px;
    height: 309px;
    border-radius: 40px;
    padding: 20px;
    box-sizing: border-box;
    background: #29263d;
    color: white;

    .card {
        padding: 20px;
        width: 380px;
        height: 229px;
        box-sizing: border-box;
        background: #181724;
        border-radius: 30px;

        .top {
            height: 80px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        .photo {
            width: 80px;
            height: 80px;
            margin-right: 20px;
        }

        .usernameAndAccount {
            line-height: 2;

            &>p:first-child {
                color: #FFFFFF;
                font-size: 16px;
            }

            &>P:last-child {
                color: #FFFFFF;
                font-size: 14px;
                opacity: 0.7;
            }
        }

        .center {
            .purplePart {
                width: 100%;
                height: 89px;
                padding: 20px;
                box-sizing: border-box;
                background: url("/imgs/bi-zhi-images/prefess.png");
                background-size: 100%;
                font-size: 16px;
                line-height: 2;
                display: flex;
                align-items: center;
                justify-content: space-between;

                &>div>p:last-child {
                    font-size: 12px;
                    opacity: 0.7;
                }

                button {
                    padding: 0px 16px;
                    border-radius: 16px;
                    min-width: 68px;
                    height: 32px;
                    font-size: 14px;
                    color: #2F1E67;
                    background: white;
                    font-weight: 550;
                    border: 0;
                    cursor: pointer;
                }
            }

            // .professionalVersion{
            //     border: 1px dashed lightgray;
            // }
            .freeVersion {
                border-radius: 10px;
            }
        }
    }

    .back {
        font-size: 14px;
        font-weight: 550;
        color: white;
        text-align: center;
        height: 60px;
        line-height: 60px;

        img {
            width: 13px;
            vertical-align: middle;
            margin-left: 5px;
            cursor: pointer;
        }

        span {
            cursor: pointer;
        }
    }
}
</style>>