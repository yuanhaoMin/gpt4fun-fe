<template>
    <div class="pc">
        <div>
            <!-- <div class="biZhi bgimgs">
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
                                <div>基础版/专业版</div>
                                <div>AI创造力</div>
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
                                <div><img src="/imgs/home-page-images/07.png" alt="">图片模式</div>
                                <div>DALL-E模型</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="aaa move-in"> <img src="/imgs/home-page-images/bc.png" alt="" class="screenshot">
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="recruit bgimgs">
                <div class="top">
                    <div>
                        <img src="/imgs/home-page-images/logo.png" alt="">
                    </div>
                    <div class="btn" @click="$router.push('/login')">
                        登录/注册
                    </div>
                </div>
                <div><img src="/imgs/home-page-images/09.png" alt="" class="recruitim"></div>
                <div class="recruitai">
                    <div class="bbb move-in"> <img src="/imgs/home-page-images/bc.png" alt="" class="screenshot">
                    </div>
                    <div class="Introduction">上传候选人简历并输入岗位JD,AI助手便会为您进行打分和持续对话,甚至还能为您生成面试题,让您的招聘过程更加高效、精准。</div>
                </div>
            </div>
            <div class="scene bgimgs">
                <div><img src="/imgs/home-page-images/10.png" alt="" class="sceneim"></div>
                <div class="sceneai">
                    <div class="scene-scenario">
                        我们深知很多用户在与AI对话时可能会感到困惑,因此我们特意设置了一些常用场景,帮助您更好地利用AI技术。例如,在搜集资料的场景中,您只需按照给出的内容,依次填入领域、主题、重点、要求和其他提示词,AI助手便能为您生成尽可能准确的结果。
                    </div>
                    <div class="ccc move-in"> <img src="/imgs/home-page-images/bc.png" alt="" class="screenshot">
                    </div>
                </div>
            </div>
            <div class="enterprise">
                <div><img src="/imgs/home-page-images/11.png" alt="" class="enterpriseim"></div>
                <div class="enterpriseai">
                    <div class="enterprise-services">
                        <div class="services-one">一、企业为什么需要AI?</div>
                        <div class="services-two">1. 自动回复与客户服务:AI可以帮助企业处理客户咨询、解答问题,提高客户满意度,同时减轻客服人员的工作压力。<br>
                            2. 文案撰写与编辑:AI可以为企业撰写各种文案,如宣传稿、新闻稿、产品介绍等,提高企业的品牌形象和市场影响力。<br>
                            3. 数据分析与报告:AI可以帮助企业分析各种数据,为企业提供有价值的洞察和建议,助力企业做出更明智的决策。<br>
                            4. 市场调查与竞品分析:AI可以为企业进行市场调查和竞品分析,帮助企业了解市场趋势和竞争对手的情况,为企业制定 <br> 更有效的市场策略。<br>
                            5. 招聘与人力资源管理:AI可以帮助企业筛选简历、生成面试题、进行候选人评估等,提高招聘效率和人才选拔质量。<br>
                            6. 项目管理与协同办公:AI可以帮助企业进行项目管理,如任务分配、进度跟踪、团队协作等,提高企业的工作效率。<br>
                            7. 知识管理与培训:AI可以为企业提供知识库管理、员工培训等服务,帮助企业提高员工的专业技能和综合素质。<br>
                            8. 语言翻译与跨文化沟通:AI可以为企业提供多语言翻译服务,帮助企业更好地进行国际化发展和跨文化沟通。<br>
                            总之,我们的AI助手可以为企业提供全方位的支持,助力企业提高效率、降低成本、优化管理,从而实现更快速的发展。</div>
                    </div>
                    <div class="enterprise-services">
                        <div class="services-one">二、企业不知道如何使用AI?</div>
                        <div class="services-two">毕至咨询将为您提供全方面的关于AI应用的培训及课程,帮助每一个人真正使用AI。<br>
                            培训内容包括:AIGC概述、文本生成、图片生成、音视频生成及最重要的提示词教学。</div>
                    </div>
                </div>
            </div>

        </div>
        <bottom />
    </div>
    <div class="phone">

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
@import '../assets/pc-css/homecss.scss'
</style>