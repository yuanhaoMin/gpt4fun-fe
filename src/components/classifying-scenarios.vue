<template>
    <div class="box">
        <div class="Job-recruitment ">功能1:工作日常</div>
        <div class="design" v-show="isShowwork">
            <div @click="drawer = true">搜集资料</div>
            <div>撰写报告</div>
            <div>招聘文案</div>
            <div>生成培训计划/大纲</div>
            <div>销售计划/营销方案</div>
            <div>产品说明书/路线图/架构</div>
        </div>
        <div class="Job-recruitment">功能2:社交媒体</div>
        <div class="design" v-show="isShowsocialize">
            <div>灵感迸发</div>
            <div>视频脚本</div>
            <div>标题建议/优化</div>
        </div>
        <el-drawer v-model="drawer" title="I am the title" :with-header="false" direction="rtl">
            <div class="under-drawer">
                <h1>搜集资料</h1>
                <div>领域:<el-input v-model="input1" class="w-50 m-2" size="large" placeholder="请输入领域" /></div>
                <div>主题:<el-input v-model="input2" class="w-50 m-2" size="large" placeholder="请输入主题" /></div>
                <div>重点:<el-input v-model="input3" class="w-50 m-2" size="large" placeholder="请输入重点" /></div>
                <div>要求:<el-input v-model="input4" class="w-50 m-2" size="large" placeholder="请输入要求" /></div>
                <div>其他提示词:<el-input v-model="input5" class="w-50 m-2" size="large" placeholder="请输入其他提示词" /></div>
                <div>
                    <el-button type="primary" @click="sending">发送</el-button>
                    <el-button type="info">取消</el-button>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            isShowwork: false,
            isShowsocialize: false,
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
        }
    },
    methods: {
        sending() {

            this.$emit('sendUserMessageAndDisplayResponse');
            this.drawer = false
        }
    }

}
</script>

<style lang="scss" scoped>
.box {
    width: 278px;
    padding: 20px 15px;
    box-sizing: border-box;

    .Job-recruitment {
        margin-top: 10px;
        border: 1px solid lightgray;
        padding: 10px 0px;
        color: white;
        font-size: 20px;
        border-radius: 50px;
        text-align: center;
        cursor: pointer;
    }

    .design {
        color: #bfbfbf;

        div {
            margin-top: 5px;
            text-align: center;
            border-radius: 50px;
            padding: 10px;
            border: 1px solid;
            cursor: pointer;
        }
    }



    .under-drawer {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            margin-bottom: 10px;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 500px;
            margin-top: 10px;

            .el-input--large {
                margin: 0;
                width: 380px;
            }
        }
    }
}

.el-button {
    margin-top: 40px;
    width: 200px;
}
</style>