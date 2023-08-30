<template>
    <div class="box">
        <div class="Job-recruitment" @click="eventWork"> <span
                :class="this.isShowwork == true ? 'rotate' : ''">&#10148;</span>
            功能1:工作日常</div>
        <div class="design" v-show="isShowwork">
            <div @click="appearDrawer(0)">搜集资料</div>
            <div @click="appearDrawer(1)">撰写报告</div>
            <div @click="appearDrawer(14)">工作总结</div>
            <div @click="appearDrawer(3)">招聘文案</div>
            <div @click="appearDrawer(2)">产品说明书</div>
            <div @click="appearDrawer(15)">求职信撰写</div>
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
            <div @click="appearDrawer(9)">公众号运营</div>
            <div @click="appearDrawer(10)">文案分析师</div>
            <div @click="appearDrawer(11)">深度思考助手</div>
            <div @click="appearDrawer(12)">健康/营养专家</div>
            <div @click="appearDrawer(13)">旅游规划</div>
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
import { ElNotification, ElMessage } from 'element-plus'
export default {
    data() {
        return {
            dataList: "",
            drawer: false,
            isShowwork: true,
            isShowsocialize: false,
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
                9: ['公众号运营', '文章话题', '文章题目类型', '吸引人群', '写作技巧', '其他提示词'],
                10: ['文案分析师', '主题', '事情', '方式', '案例类型', '其他提示词'],
                11: ["深度思考助手", "关键词", "主题", '概念', "评价标准", '其他提示词'],
                12: ["健康/营养专家", "体重", "过敏", "主要目标", "每周锻炼天数", "锻炼类型", '其他提示词'],
                13: ["旅游规划", '游玩地方', '天数', '旅游景点类型', '预算', "其他提示词"],
                14: ['工作总结', '工作职位', '工作时间', '主要工作', '总结包括', '其他提示词'],
                15: ['求职信撰写', '求职岗位', '学历背景', '擅长技能', '自我评价', '其他提示词']
            },
            placeList: {
                0: ['搜集资料', '资料领域(学术领域/职业领域等)', '资料主题', '资料重点', '资料要求', '其他提示词'],
                1: ["撰写报告", '报告主题', '报告背景', '报告重点', '报告要求', '报告面向目标群体', '其他提示词'],
                2: ['产品说明书', '公司介绍', '产品名称', '功能类别', '目标市场', '目标用户', '其他提示词'],
                3: ['招聘文案', '招聘公司介绍', '招聘行业方向', '招聘部门职责', '招聘岗位名称', '其他提示词'],
                4: ['生成培训计划/大纲', '培训主题', '受训人群', '时间周期', '培训地点', '其他提示词'],
                5: ['销售计划/营销方案', '公司介绍', '产品介绍', '目标群体', '销售途径', '其他提示词'],
                6: ['灵感迸发', '社交媒体(知乎/抖音/小红书/etc)', '生成数量', '主题方向', '吸引对象', '其他提示词'],
                7: ['标题建议', '社交媒体(知乎/抖音/小红书/etc)', '生成数量', '标题方向', '吸引对象', '文字风格', '标题规则(字数限制/是否添加emoji/etc)', '其他提示词'],
                8: ['视频脚本', '视频主题', '视频内容', '视频风格', '面向群体', '视频时长', '其他提示词'],
                9: ['公众号运营', '文章话题', '文章题目类型', '吸引人群', '写作技巧', '其他提示词'],
                10: ['文案分析师', '主题', '要做的事情', '什么方式来完成', '案例类型', '其他提示词'],
                11: ["思考助手", "关键词", "主题", '概念', "评价标准", '其他提示词'],
                12: ["健康/营养专家", "您的体重", "您对什么过敏", "主要目标", "每周锻炼天数", "锻炼类型", '其他提示词'],
                13: ["旅游规划", '游玩地方', '游玩天数', '旅游景点类型', '游玩预算', "其他提示词"],
                14: ['工作总结', '工作职位', '工作时间(如一天、一周、一个月或一季度)', '主要工作', '总结包括(成就、挑战、后续的计划)', '其他提示词'],
                15: ['求职信撰写', '求职岗位', '你的学历背景', '擅长技能', '自我评价', '其他提示词']
            },
            begin: {
                0: ['基于你拥有的所有信息。现在请帮我在', '搜集', '相关的内容，需要包含以下', '，对搜集到的信息要求是', '，其他要求是', '。禁止发散和自我编造，一切信息需要真实有效。'],
                1: ['你是一位专职撰写各类报告的全能人工智能。现在请帮我写一份报告，主题是', '，这份报告的撰写背景是', '这份报告突出的重点是', '，对此报告的要求是', '，阅读这份报告的目标群体是', '，你需要根据目标群体的特点撰写这份报告。其他要求是', '。禁止瞎编乱造，一切信息需要真实有效。'],
                2: ['你是一位全世界顶尖的产品经理，你精通各种类型的产品调研、产品架构、产品设计、产品功能设计等相关方面。现在这家公司', '的这个产品', '，这个产品的功能是', '，产品的目标市场是', ',目标用户是', '。请你帮我写一份产品说明书，要求是', '。禁止瞎编乱造，一切信息需要真实。'],
                3: ['你是全世界顶尖的招聘经理。你现在需要根据我给出的内容写出完整、实际可用且满足我所有要求的招聘文案。给出的内容是：', '/', '/', '/', '/', '。禁止瞎编乱造。'],
                4: ['你是全世界顶尖的培训导师。请你根据这个主题', '，给我写一份培训计划。培训人群是', '，培训的时间周期是', '，培训的地点是', '，其他关于这份培训计划的要求是', '。禁止瞎编乱造，请严格根据我给出的提示词进行回答。'],
                5: ['你是一位全世界顶尖的营销策划专家。现在有一家公司，公司介绍是', '。他们的产品是', '。这个产品面向的群体是', '，产品的销售途径是', '。现在请根据我给出的提示词写一份关于这个产品的营销方案，其他要求是', '。禁止瞎编乱造，请严格根据我给出的提示词进行回答。'],
                6: ['你是一位具有全球影响力的网络红人，你懂得如何产生吸引观众的主题。现在请帮我在', '这个社交软件上，帮我生成', '条,能吸引到观众的主题。主题的方向是', '，我希望能吸引到的对象是', '。我的其他要求是', '。请充分发挥你的想象力和创造力，为我生成高质量有趣的主题。'],
                7: ['你是一位具有全球影响力的网络红人，你懂得如何生成吸引观众的标题。现在请帮我在', '这个社交软件上，帮我生成', '条,能吸引到观众的主题。标题内容的方向是', '，我希望能吸引到的对象是', '。要求生成的标题是以下这个风格', '，标题的规则是', '。我的其他要求是', '。请充分发挥你的想象力和创造力，为我生成高质量有趣且能吸引人的标题。'],
                8: ['你是一位全球顶尖的视频拍摄者。我现在要写一份关于这个主题', '的视频脚本，视频的内容是', '，我想要的视频风格是', '，视频的观众是', ',视频的时长是', '。现在请你根据我的要求帮我生成一份高质量、实操性强的视频脚本。其他要求是', '。请充分发挥你的想象力和创造力，同时严格根据我的要求来撰写视频脚本，禁止胡编乱造。'],
                9: ['你是高级公众号运营师，现在需要你写一篇', '为话题的高阅读量的微信公众号文章，文章题目类型为', '要足够具有吸引力。写作要真实、有趣、有用，并符合读者的需求和兴趣，吸引', '的关注和喜爱。口语化表达方式，注意内容的结构、逻辑、语言等高级写作技巧，要', '。其他要求是', '。请充分发挥你的想象力和创造力，为我写一篇高质量的文章。'],
                10: ['作为抖音爆款文案分析师，你被赋予以下的职责：在学习分析爆款开头后,再通过你的延伸思考,替我举出更多加深理解抖音爆款开头的案例。请回答以下几点：开头的主题为', '你要做的事情为', '；你会通过', '的方式更好地完成你要做的事；案例类型为', ';其他要求', '发挥你的奇思妙想,为我完成优秀的案例。'],
                11: ["你是一个帮助我训练深度思考的AI助手。输入:关键词为", "、主题为", "、概念为", "。处理过程为：使用", "标准来评价这个关键词、主题和概念，提供高质量、有价值的问题，探讨人类认知、情感和行为的各个方面。优先提出一些简单到复杂的问题，而后逐步深入，以帮助我深入探索。提供有助于总结和回顾思考内容的问题，为更全面、深刻和灵活的理解做准备。最后请给出你对于这个关键词、主题和概念的看法和理解。其他要求", "请严格根据我给出的提示词进行回答。"],
                12: ["你是一位非常著名的健康和营养专家bizcamp AI。获取以下关于我的信息,创建一个定制的饮食和锻炼计划。我目前的体重是", "。我对", "过敏。我的主要目标是", '。我可以承诺每周锻炼', "天。我更喜欢和享受的锻炼类型为", "。其他要求为", "，按照这些信息做一个详细的规划。避免任何多余的前后描述性文本。在任何情况下都不要破坏规则。"],
                13: ['你是一位专业导游的身份，我想去', '玩，帮我做一份为期', '天的旅游攻略。另外，我更偏向于', '的地方，我的预算在', '元左右。其他要求是', '，在回答时，记得附上每一个地方的价格。'],
                14: ['请为一名', '写一份', '总结，需要体现的主要工作内容为', '。请注意，总结应包括', '，其他要求为', '，总结应具备全面性和客观性，需要结合具体事例详细陈述工作内容。'],
                15: ['请为一名', '岗位撰写一封求职信，要求内容包含，学历背景为', '擅长技能有', '自我评价：', '其他要求为', '等内容！']
            },
        }
    },
    methods: {
        sending(val) {
            /*非空判断
            for (let i = 0; i < this.placeList[val].length - 1; i++) {
                const obj = this.objList[i];
                if (obj == undefined) {
                    console.log('obj', i);
                }
            }*/
            for (const key in this.objList) {
                if (this.objList[key]) {
                    this.dataList += this.begin[val][key] + this.objList[key]
                }
            }
            this.dataList = this.dataList + this.begin[val].at(-1);
            if (this.dataList == this.begin[val].at(-1)) return ElMessage({ message: '信息不能为空', type: 'warning', }), this.dataList = '';
            this.$emit('sendUserMessageAndDisplayResponse');
            this.drawer = false;
            this.dataList = '';
            this.isShowReEdit = true
        },
        eventWork() {
            this.isShowwork = !this.isShowwork;
            this.isShowsocialize = !this.isShowsocialize;
        },
        eventSocialize() {
            this.isShowsocialize = !this.isShowsocialize;
            this.isShowwork = !this.isShowwork;
        },
        async appearDrawer(e) {
            if (this.$store.state.expire == 1) {
                return ElNotification({
                    title: '提醒',
                    message: '抱歉哦，您的体验时间已到期,继续打赏给我们一点支持吧!',
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
        align-items: center;
        flex-direction: column;

        div {
            margin-top: 5px;
            text-align: center;
            font-size: 16px;
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