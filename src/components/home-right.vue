<template>
    <div class="rightbox">
        <div class="tall">
            <div>
                <div @click="selectChatMode">
                    <span>对话模式 :</span>&emsp;
                    <el-switch v-model="isChatMode.isChatModeSelected" size="large" />
                </div>
                <div v-show="isChatMode.isShowChatMode">
                    <div>
                        AI模型: &emsp;<el-select placeholder="AI模型" v-model="isChatMode.selectedChatModeModel" size="small">
                            <el-option label="3.5" value="gpt-3.5-turbo" />
                            <el-option :label="this.$store.state.expire == 1 ? '4.0(需充值专业版)' : '4.0'" value="gpt-4"
                                :disabled="this.$store.state.expire == 1 ? true : false" />
                        </el-select>
                    </div>
                    <div>
                        AI创造力:
                        <el-select placeholder="AI创造力" v-model="isChatMode.selectedChatModeTemperature" size="small">
                            <el-option label="保守模式" value="0" />
                            <el-option label="均衡模式" value="0.2" />
                            <el-option label="创造模式" value="0.6" />
                        </el-select>
                    </div>
                </div>
            </div>
        </div>

        <div class="unify">
            <div @click="selectCompletionMode">
                <span>问答模式 :</span>&emsp;
                <el-switch v-model="isCompletionMode.isCompletionModeSelected" size="large" />
            </div>

            <div v-show="isCompletionMode.isShowCompletionMode">
                是否联网：<el-select placeholder="是否联网" v-model="isCompletionMode.selectedCompletionModeOnlineOption"
                    size="small">
                    <el-option label="联网" value="online" />
                    <el-option label="离线" value="offline" />
                </el-select>
            </div>
        </div>

        <div class="unify">
            <div @click="selectImagineMode">
                <span>图片生成 :</span>&emsp;
                <el-switch v-model="isImagineMode.isImagineModeSelected" size="large" />
            </div>

            <div v-show="isImagineMode.isShowImagineMode">
                <div>
                    图片数量：<el-select placeholder="图片数量" v-model="isImagineMode.selectedImagineModeImageNum" size="small">
                        <el-option label="1" value="1" />
                        <el-option label="2" value="2" />
                        <el-option label="3" value="3" />
                    </el-select>
                </div>
                <div>
                    图片尺寸：<el-select placeholder="图片尺寸" v-model="isImagineMode.selectedImagineModeImageSize" size="small">
                        <el-option label="256x256" value="256x256" />
                        <el-option label="516x516" value="512x512" />
                        <el-option label="1024x1024" value="1024x1024" />
                    </el-select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { info } from "../api/user";
import { ElNotification } from 'element-plus'
export default {
    data() {
        return {
            isChatMode: {
                isChatModeSelected: false,//对话模式
                isShowChatMode: false,
                selectedChatModeModel: "gpt-3.5-turbo",
                selectedChatModeTemperature: "0.2",
            },
            isCompletionMode: {
                isCompletionModeSelected: true,//问答模式
                isShowCompletionMode: true,
                selectedCompletionModeOnlineOption: "online",
            },
            isImagineMode: {
                isImagineModeSelected: false,//图片模式
                isShowImagineMode: false,
                selectedImagineModeImageNum: "1",
                selectedImagineModeImageSize: "512x512",
            },
        }
    },
    created() {
        this.selectMode();
        this.selectChat();
    },
    methods: {
        selectChatMode() {
            this.isChatMode.isChatModeSelected = this.isChatMode.isShowChatMode = true;
            this.isCompletionMode.isCompletionModeSelected = this.isCompletionMode.isShowCompletionMode = this.isImagineMode.isShowImagineMode = this.isImagineMode.isImagineModeSelected = false;
            this.selectMode();
        },
        selectCompletionMode() {
            this.isCompletionMode.isCompletionModeSelected = this.isCompletionMode.isShowCompletionMode = true
            this.isChatMode.isChatModeSelected = this.isChatMode.isShowChatMode = this.isImagineMode.isShowImagineMode = this.isImagineMode.isImagineModeSelected = false
            this.selectMode();
        },
        selectImagineMode() {
            if (this.$store.state.expire == 1) {
                this.isImagineMode.isShowImagineMode = this.isImagineMode.isImagineModeSelected = false
                ElNotification({
                    title: '提醒',
                    message: '抱歉哦，这个功能需要升级专业版，有任何疑问欢迎联系我们',
                    type: 'warning',
                })
                return
            }
            this.isImagineMode.isShowImagineMode = this.isImagineMode.isImagineModeSelected = true
            this.isChatMode.isChatModeSelected = this.isChatMode.isShowChatMode = this.isCompletionMode.isCompletionModeSelected = this.isCompletionMode.isShowCompletionMode = false
            this.selectMode();
        },
        selectMode() {
            if (this.isChatMode.isChatModeSelected == true) {
                this.$store.commit("selected", this.isChatMode)
            } else if (this.isCompletionMode.isCompletionModeSelected == true) {
                this.$store.commit("selected", this.isCompletionMode)
            } else if (this.isImagineMode.isShowImagineMode == true) {
                this.$store.commit("selected", this.isImagineMode)
            }
        },
        selectChat() {
            if (this.$route.path == '/chat') {
                this.isChatMode.isChatModeSelected = this.isChatMode.isShowChatMode = true;
                this.isCompletionMode.isCompletionModeSelected = this.isCompletionMode.isShowCompletionMode = false;
                this.$store.commit("selected", this.isChatMode)
            } else if (this.$route.path == '/recruit') {
                this.isCompletionMode.selectedCompletionModeOnlineOption = "offline";
            } else if (this.$route.path == '/scene') {
                this.isChatMode.isChatModeSelected = true
                this.isChatMode.selectedChatModeTemperature = "0"
            }

        }
    }
}
</script>

<style scoped lang="scss">
.rightbox {
    width: 278px;
    height: 314px;
    padding: 20px 0px 20px 40px;
    line-height: 3;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;

    ::v-deep(.el-switch--large .el-switch__core) {
        border: 0;
    }

    ::v-deep(.el-switch.is-checked .el-switch__core) {
        background-color: #f9f9f9;
    }

    ::v-deep(.el-switch.is-checked .el-switch__core .el-switch__action) {
        background-color: #311a67;
    }

    ::v-deep(.el-switch__core) {
        background: #463176;
    }

    ::v-deep(.el-switch__core .el-switch__action) {
        background-color: #a298ba;
    }

    ::v-deep(.el-select .el-input__wrapper) {
        background-color: #463176 !important;
        box-shadow: none !important;
    }

    ::v-deep(.el-input__inner) {
        color: #FFFFFF;
    }
}
</style>