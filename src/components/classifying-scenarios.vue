<template>
    <div class="box">
        <div class="Job-recruitment" @click="eventWork"> <span
                :class="this.isShowwork == true ? 'rotate' : ''">&#10148;</span>
            功能1:工作日常</div>
        <div class="design" v-show="isShowwork">
            <div @click="appearDrawer(0)">搜集资料</div>
            <div @click="appearDrawer(1)">撰写报告</div>
            <div @click="appearDrawer(2)">产品说明书</div>
            <div @click="appearDrawer(3)">招聘文案</div>
            <div @click="appearDrawer(4)">生成培训计划/大纲</div>
            <div @click="appearDrawer(5)">销售计划/营销方案</div>
        </div>
        <div class="Job-recruitment" @click="eventSocialize"> <span
                :class="this.isShowsocialize == true ? 'rotate' : ''">&#10148;</span>
            功能2:社交媒体</div>
        <div class="design" v-show="isShowsocialize">
            <div @click="appearDrawer(6)">灵感迸发</div>
            <div @click="appearDrawer(7)">标题建议</div>
            <div @click="appearDrawer(8)">视频脚本</div>
        </div>
        <el-dialog v-model="drawer" width="30%" center :close-on-click-modal='false'>
            <div class="under-drawer-div">
                <h1>{{ drawList[this.isShowdrawer][0] }}</h1>
                <div v-for="(item, index) in  drawList[this.isShowdrawer].slice(1)">{{ item }}:<el-input
                        v-model="objList[index]" class="w-50 m-2" size="large"
                        :placeholder='pleaseIpt + placeList[this.isShowdrawer][index + 1]' :key="index" /></div>
            </div>
            <template #footer>
                <div class="under-drawer">
                    <el-button type="primary" @click="sending(this.isShowdrawer)">发送</el-button>
                    <el-button type="info" @click="drawer = false">取消</el-button>
                </div>
            </template>
        </el-dialog>
        <div class="re-ebit" v-show="isShowReEdit" @click="reEdit">重新编辑</div>
    </div>
</template>

<script>
import { ElNotification } from 'element-plus'
export default {
    data() {
        return {
            dataList: "",
            drawer: false,
            isShowwork: true,
            isShowsocialize: true,
            isShowdrawer: "",
            isShowReEdit: false,
            objList: {
                0: '',
                1: '',
                2: '',
                3: '',
                4: '',
                5: '',
                6: '',
            },
            pleaseIpt: '请输入',
            drawList: {
                0: ['搜集资料', '领域', '主题', '重点', '要求', '其他提示词'],
                1: ["撰写报告", '主题', '背景', '重点', '要求', '目标群体', '其他提示词'],
                2: ['产品说明书', '公司介绍', '产品名称', '功能类别', '目标市场', '目标用户', '其他提示词'],
                3: ['招聘文案', '公司介绍', '行业方向', '部门职责', '岗位名称', '其他提示词'],
                4: ['生成培训计划/大纲', '培训主题', '受训人群', '时间周期', '培训地点', '其他提示词'],
                5: ['销售计划/营销方案', '公司介绍', '产品介绍', '目标群体', '销售途径', '其他提示词'],
                6: ['灵感迸发', '社交媒体', '生成数量', '主题方向', '吸引对象', '其他提示词'],
                7: ['标题建议', '社交媒体', '生成数量', '标题方向', '吸引对象', '文字风格', '标题规则', '其他提示词'],
                8: ['视频脚本', '视频主题', '视频内容', '视频风格', '面向群体', '视频时长', '其他提示词'],
            },
            placeList: {
                0: ['搜集资料', '领域', '主题', '重点', '要求', '其他提示词'],
                1: ["撰写报告", '主题', '背景', '重点', '要求', '目标群体', '其他提示词'],
                2: ['产品说明书', '公司介绍', '产品名称', '功能类别', '目标市场', '目标用户', '其他提示词'],
                3: ['招聘文案', '公司介绍', '行业方向', '部门职责', '岗位名称', '其他提示词'],
                4: ['生成培训计划/大纲', '培训主题', '受训人群', '时间周期', '培训地点', '其他提示词'],
                5: ['销售计划/营销方案', '公司介绍', '产品介绍', '目标群体', '销售途径', '其他提示词'],
                6: ['灵感迸发', '社交媒体(知乎/抖音/小红书/etc)', '生成数量', '主题方向', '吸引对象', '其他提示词'],
                7: ['标题建议', '社交媒体(知乎/抖音/小红书/etc)', '生成数量', '标题方向', '吸引对象', '文字风格', '标题规则(字数限制/是否添加emoji/etc)', '其他提示词'],
                8: ['视频脚本', '视频主题', '视频内容', '视频风格', '面向群体', '视频时长', '其他提示词'],
            },
            begin: {
                0: ['基于你拥有的所有信息。现在请帮我在', '搜集', '相关的内容，需要包含以下', '，对搜集到的信息要求是', '，其他要求是', '。禁止发散和自我编造，一切信息需要真实有效。'],
                1: ['你是一位专职撰写各类报告的全能人工智能。现在请帮我写一份报告，主题是', '，这份报告的撰写背景是', '这份报告突出的重点是', '，对此报告的要求是', '，阅读这份报告的目标群体是', '，你需要根据目标群体的特点撰写这份报告。其他要求是', '。禁止瞎编乱造，一切信息需要真实有效。'],
                2: ['你是一位全世界顶尖的产品经理，你精通各种类型的产品调研、产品架构、产品设计、产品功能设计等相关方面。现在这家公司', '的这个产品', '，这个产品的功能是', '，产品的目标市场是', ',目标用户是', '。请你帮我写一份产品说明书，要求是', '。禁止瞎编乱造，一切信息需要真实。'],
                3: ['你是全世界顶尖的招聘经理。你现在需要根据我给出的内容写出完整、实际可用且满足我所有要求的招聘文案。给出的内容是：', '/', '/', '/', '/', '。禁止瞎编乱造。'],
                4: ['你是全世界顶尖的培训导师。请你根据这个主题', '，给我写一份培训计划。培训人群是', '，培训的时间周期是', '，培训的地点是', '，其他关于这份培训计划的要求是', '。禁止瞎编乱造，请严格根据我给出的提示词进行回答。'],
                5: ['你是一位全世界顶尖的营销策划专家。现在有一家公司，公司介绍是', '。他们的产品是', '。这个产品面向的群体是', '，产品的销售途径是', '。现在请根据我给出的提示词写一份关于这个产品的营销方案，其他要求是', '。禁止瞎编乱造，请严格根据我给出的提示词进行回答。'],
                6: ['你是一位具有全球影响力的网络红人，你懂得如何产生吸引观众的主题。现在请帮我在这个社交软件上', '，帮我生成', '能吸引到观众的主题。主题的方向是', '，我希望能吸引到的对象是', '。我的其他要求是', '。请充分发挥你的想象力和创造力，为我生成高质量有趣的主题。'],
                7: ['你是一位具有全球影响力的网络红人，你懂得如何生成吸引观众的标题。现在请帮我在这个社交软件上', '，帮我生成', '能吸引到观众的主题。标题内容的方向是', '，我希望能吸引到的对象是', '。要求生成的标题是以下这个风格', '，标题的规则是', '。我的其他要求是', '。请充分发挥你的想象力和创造力，为我生成高质量有趣且能吸引人的标题。'],
                8: ['你是一位全球顶尖的视频拍摄者。我现在要写一份关于这个主题', '的视频脚本，视频的内容是', '，我想要的视频风格是', '，视频的观众是', ',视频的时长是', '。现在请你根据我的要求帮我生成一份高质量、实操性强的视频脚本。其他要求是', '。请充分发挥你的想象力和创造力，同时严格根据我的要求来撰写视频脚本，禁止胡编乱造。']
            },
        }
    },
    methods: {
        sending(val) {
            for (const key in this.objList) {
                if (this.objList[key]) {
                    this.dataList += this.begin[val][key] + this.objList[key]
                }
            }
            this.dataList = this.dataList + this.begin[val].at(-1);
            this.$emit('sendUserMessageAndDisplayResponse');
            this.drawer = false;
            this.dataList = '';
            this.isShowReEdit = true
        },
        eventWork() {
            this.isShowwork = !this.isShowwork;
        },
        eventSocialize() {
            this.isShowsocialize = !this.isShowsocialize;
        },
        async appearDrawer(e) {
            if (this.$store.state.expire == 1) {
                return ElNotification({
                    title: '提醒',
                    message: '抱歉哦，这个功能需要升级专业版，有任何疑问欢迎联系我们',
                    type: 'warning',
                })
            }
            this.drawer = true
            this.isShowdrawer = e
            this.isShowReEdit = false;
            this.objList = {}
        },
        reEdit() {
            this.drawer = true;
            this.objList = this.objList
        }
    }

}
</script>

<style lang="scss" scoped>
.box {
    width: 278px;
    padding: 20px 15px;
    box-sizing: border-box;
    min-height: 314px;
    border-radius: 40px 0px 0px 40px;
    background: #2F1E67;
    position: relative;

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
        display: flex;
        align-items: flex-end;
        flex-direction: column;

        div {
            margin-top: 5px;
            text-align: center;
            font-size: 16px;
            margin-right: 22px;
            border-radius: 50px;
            padding: 10px;
            border: 1px solid;
            cursor: pointer;
            width: 150px;
        }
    }


    .under-drawer-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;

        h1 {
            margin-bottom: 10px;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 500px;
            margin-top: 10px;
        }

        .el-input--large {
            margin: 0;
            width: 380px;
        }
    }

    :deep(.el-input__wrapper) {
        border-radius: 40px;
    }

    :deep(.el-dialog) {
        border-radius: 20px;
        background: #311a67;
    }

    .re-ebit {
        width: 150px;
        position: absolute;
        background-color: #311a67;
        right: 70px;
        bottom: -60px;
        border: 1px solid lightgray;
        padding: 10px 0px;
        color: silver;
        font-size: 20px;
        border-radius: 50px;
        text-align: center;
        cursor: pointer;
    }
}

.under-drawer {
    display: flex;
    justify-content: space-around;
}

.el-button {
    margin-top: 40px;
    width: 200px;
}

.rotate {
    transform: rotate(90deg);
    display: inline-block;
}
</style>