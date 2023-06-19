<template>
    <div>
        <div class="biZhi bgimgs">
            <div class="top">
                <div>
                    <img src="/imgs/home-page-images/logo.png" alt="">
                </div>
                <div class="btn" @click="$router.push('/login')">
                    登录/注册
                </div>
            </div>
            <div class="bizhiai"><img src="/imgs/home-page-images/08.png" alt="" class="bizhiim"></div>
            <div class="becomes">
                <div class="becomes-im">
                    <div class="same">
                        <div class="becomes-im-one becomes-im-too">
                            <div> <img src="/imgs/home-page-images/06.png" alt="">对话模式</div>
                            <div>GPT3.5/GPT4</div>
                            <div>创造力选择</div>
                            <div>设置场景</div>
                        </div>
                    </div>
                    <div class="same">
                        <div class="becomes-im-two becomes-im-too">
                            <div> <img src="/imgs/home-page-images/05.png" alt="">问答模式</div>
                            <div>联网模式</div>
                        </div>
                    </div>
                    <div class="same">
                        <div class="becomes-im-two becomes-im-too">
                            <div><img src="/imgs/home-page-images/07.png" alt="">图片生成功能模式</div>
                            <div>DALL-E模型</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/imgs/home-page-images/00.png" alt="" class="screenshot">
                </div>
            </div>
        </div>
        <div class="recruit bgimgs">
            <div><img src="/imgs/home-page-images/09.png" alt="" class="recruitim"></div>
            <div class="recruitai">
                <div class="bckg"> <img src="/imgs/home-page-images/bc.png" alt="" class="screenshot"></div>
                <div class="Introduction">上传候选人简历并输入岗位JD,AI助手便会为您进行打分和持续对话,甚至还能为您生成面试题,让您的招聘过程更加高效、精准。</div>
            </div>
        </div>
        <div class="scene bgimgs">
            <div><img src="/imgs/home-page-images/10.png" alt="" class="sceneim"></div>
            <div class="sceneai">
                <div class="scene-scenario">
                    我们深知很多用户在与AI对话时可能会感到困惑,因此我们特意设置了一些常用场景,帮助您更好地利用AI技术。例如,在搜集资料的场景中,您只需按照给出的内容,依次填入领域、主题、重点、要求和其他提示词,AI助手便能为您生成尽可能准确的结果。
                </div>
                <div> <img src="/imgs/home-page-images/00.png" alt="" class="screenshot"></div>
            </div>
        </div>
        <div class="enterprise bgimgs">
            <div><img src="/imgs/home-page-images/11.png" alt="" class="enterpriseim"></div>
            <div class="enterpriseai">
                <div class="enterprise-services">
                    <div>一、企业为什么需要AI?</div>
                    <div>1. 自动回复与客户服务:AI可以帮助企业处理客户咨询、解答问题,提高客户满意度,同时减轻客服人员的工作压力。<br>
                        2. 文案撰写与编辑:AI可以为企业撰写各种文案,如宣传稿、新闻稿、产品介绍等,提高企业的品牌形象和市场影响力。<br>
                        3. 数据分析与报告:AI可以帮助企业分析各种数据,为企业提供有价值的洞察和建议,助力企业做出更明智的决策。<br>
                        4. 市场调查与竞品分析:AI可以为企业进行市场调查和竞品分析,帮助企业了解市场趋势和竞争对手的情况,为企业制定更有效的市场策略。<br>
                        5. 招聘与人力资源管理:AI可以帮助企业筛选简历、生成面试题、进行候选人评估等,提高招聘效率和人才选拔质量。<br>
                        6. 项目管理与协同办公:AI可以帮助企业进行项目管理,如任务分配、进度跟踪、团队协作等,提高企业的工作效率。<br>
                        7. 知识管理与培训:AI可以为企业提供知识库管理、员工培训等服务,帮助企业提高员工的专业技能和综合素质。<br>
                        8. 语言翻译与跨文化沟通:AI可以为企业提供多语言翻译服务,帮助企业更好地进行国际化发展和跨文化沟通。<br>
                        总之,我们的AI助手可以为企业提供全方位的支持,助力企业提高效率、降低成本、优化管理,从而实现更快速的发展。</div>
                </div>
                <div class="enterprise-services">
                    <div>二、企业不知道如何使用AI?</div>
                    <div>毕至咨询将为您提供全方面的关于AI应用的培训及课程,帮助每一个人真正使用AI。<br>
                        培训内容包括:AIGC概述、文本生成、图片生成、音视频生成及最重要的提示词教学。</div>
                </div>
            </div>
        </div>
        <bottom />
    </div>
</template>

<script>
import bottom from '../components/home-bottom/bottom.vue';
export default {
    components: {
        bottom
    }
}
</script>

<style lang="scss" scoped>
.bgimgs {
    width: 100%;
    height: 100vh;
    color: white;
}

.biZhi {
    background: url(/imgs/home-page-images/01.png) no-repeat center;
    background-size: cover;
    box-sizing: border-box;

    .top {
        width: 1200px;
        margin: auto;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            width: 79px;
            height: 40px;
        }

        .btn {
            width: 112px;
            font-size: 16px;
            height: 38px;
            background: #6721FF;
            border-radius: 24px;
            text-align: center;
            line-height: 38px;
            cursor: pointer;
        }
    }

    .bizhiai {
        text-align: center;
        margin-top: 120px;

        .bizhiim {
            width: 600px;
            height: 100px;
        }
    }

    .becomes {
        margin-top: 97px;
        display: flex;
        justify-content: center;

        .becomes-im {
            display: flex;
            margin-right: 60px;
            flex-direction: column;
            justify-content: space-between;

            .same {
                width: 326px;
                background-image: linear-gradient(270deg, rgba(5, 200, 254, 1), rgba(108, 41, 255, 1), rgba(148, 106, 255, 1));
                padding: 1px;
                border-radius: 20px;

                .becomes-im-too {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                    background: #160042;
                    border-radius: 20px;

                    div:first-child {
                        display: flex;
                        align-items: center;
                        font-size: 20px;

                        img {
                            margin-right: 5px;
                        }
                    }

                    div:not(:first-child) {
                        font-weight: 400;
                        color: rgba(255, 255, 255, 0.7);
                    }

                    img {
                        width: 21px;
                        height: 20px;
                    }
                }
            }

            .becomes-im-one {
                height: 174px;
            }

            .becomes-im-two {
                height: 110px;
            }
        }
    }
}

.screenshot {
    width: 810px;
    height: 440px;
}

.recruit {
    background: url(/imgs/home-page-images/02.png) no-repeat center;
    background-size: cover;

    .recruitim {
        margin-top: 200px;
        margin-left: 367px;
        width: 605px;
        height: 100px;
    }

    .recruitai {
        margin-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;

        .bckg {
            width: 810px;
            height: 440px;
            background: url(/imgs/home-page-images/bbb.png) no-repeat center;
            background-size: contain;
            border-radius: 35px;
        }

        .Introduction {
            width: 328px;
            height: 240px;
            font-size: 25px;
            line-height: 40px;
            letter-spacing: 5px;
            margin-left: 60px;
        }
    }
}

.scene {
    background: url(/imgs/home-page-images/03.png) no-repeat center;
    background-size: cover;

    .sceneim {
        margin-left: 827px;
        margin-top: 217px;
        width: 680px;
        height: 100px;
    }

    .sceneai {
        display: flex;
        margin-top: 98px;
        justify-content: center;
        align-items: center;

        .scene-scenario {
            margin-right: 60px;
            width: 300px;
            height: 420px;
            font-size: 20px;
            line-height: 40px;
            letter-spacing: 5px;
        }
    }
}

.enterprise {
    background: url(/imgs/home-page-images/04.png) no-repeat center;
    background-size: cover;

    .enterpriseim {
        margin-top: 187px;
        margin-left: 365px;
        width: 460px;
        height: 100px;
    }

    .enterpriseai {
        margin-top: 58px;
        margin-left: 360px;

        .enterprise-services {
            div:first-child {
                height: 42px;
                font-size: 30px;
                font-weight: 600;
                line-height: 42px;
                letter-spacing: 6px;
            }

            div:not(:first-child) {
                margin-top: 20px;
                width: 1090px;
                line-height: 36px;
                letter-spacing: 3px;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.8);
            }
        }
    }
}
</style>