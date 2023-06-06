<template>
    <div>
        <div class="tall">
            <div>
                <div @click="selectChatMode">
                    <el-button type="primary" class="button-finger-hover">对话模式</el-button>&emsp;&emsp;
                    <el-switch v-model="isChatMode.isChatModeSelected" size="large" />
                </div>
                <br />
                <div v-show="isChatMode.isShowChatMode">
                    <div>
                        AI模型: &emsp;<el-select placeholder="AI模型" v-model="isChatMode.selectedChatModeModel">
                            <el-option label="GPT3.5" value="gpt-3.5-turbo" />
                            <el-option label="GPT4" value="gpt-4" />
                        </el-select>
                    </div>
                    <br />
                    <div>
                        AI创造力:
                        <el-select placeholder="AI创造力" v-model="isChatMode.selectedChatModeTemperature">
                            <el-option label="保守模式" value="0" />
                            <el-option label="均衡模式" value="0.2" />
                            <el-option label="创造模式" value="0.6" />
                        </el-select>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div class="unify">
            <div @click="selectCompletionMode">
                <el-button type="primary" class="button-finger-hover">问答模式</el-button>&emsp;&emsp;
                <el-switch v-model="isCompletionMode.isCompletionModeSelected" size="large" />
            </div>
            <br />
            <div v-show="isCompletionMode.isShowCompletionMode">
                是否联网：<el-select placeholder="是否联网" v-model="isCompletionMode.selectedCompletionModeOnlineOption">
                    <el-option label="联网" value="online" />
                    <el-option label="离线" value="offline" />
                </el-select>
            </div>
        </div>
        <br />
        <div class="unify">
            <div @click="selectImagineMode">
                <el-button type="primary" class="button-finger-hover">图片生成</el-button>&emsp;&emsp;
                <el-switch v-model="isImagineMode.isImagineModeSelected" size="large" />
            </div>
            <br />
            <div v-show="isImagineMode.isShowImagineMode">
                <div>
                    图片数量：<el-select placeholder="图片数量" v-model="isImagineMode.selectedImagineModeImageNum">
                        <el-option label="1" value="1" />
                        <el-option label="2" value="2" />
                        <el-option label="3" value="3" />
                    </el-select>
                </div>
                <br />
                <div>
                    图片尺寸：<el-select placeholder="图片尺寸" v-model="isImagineMode.selectedImagineModeImageSize">
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
                selectedCompletionModeOnlineOption: "offline",
            },
            isImagineMode: {
                isImagineModeSelected: false,//图片模式
                isShowImagineMode: false,
                selectedImagineModeImageNum: "1",
                selectedImagineModeImageSize: "512x512",
            }
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
        },
        selectCompletionMode() {
            this.isCompletionMode.isCompletionModeSelected = this.isCompletionMode.isShowCompletionMode = true
            this.isChatMode.isChatModeSelected = this.isChatMode.isShowChatMode = this.isImagineMode.isShowImagineMode = this.isImagineMode.isImagineModeSelected = false

        },
        selectImagineMode() {
            this.isImagineMode.isShowImagineMode = this.isImagineMode.isImagineModeSelected = true
            this.isChatMode.isChatModeSelected = this.isChatMode.isShowChatMode = this.isCompletionMode.isCompletionModeSelected = this.isCompletionMode.isShowCompletionMode = false

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
            }
        }
    }
}
</script>

<style scoped>
.tall {
    text-align: center;
    margin: 52px 5px 0px;
    color: white;
}

.unify {
    text-align: center;
    margin: 5px;
    color: white;
}

.button-finger-hover {
    border-radius: 41px;
    width: 57%;
    height: 40px;
    background-color: #eff0f2;
    color: #656668;
    box-shadow: 2px 2px 8px 0px;
}

.button-finger-hover:hover {
    background: white;
}

.el-button--primary {
    border: 0px;
}

.el-select {
    --el-select-input-focus-border-color: white;
}
</style>