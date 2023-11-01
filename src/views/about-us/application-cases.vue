<template>
    <div>
        <div class="top">
            <abouttop></abouttop>
        </div>
        <div class="grayarea">
            <p class="applicationcase">应用场景</p>
            <p class="completion">Completion service</p>
            <div class="tab">
                <span :class="tab == 1 ? 'tab-bg' : ''" @click="tab = 1">战略与组织</span>
                <span :class="tab == 2 ? 'tab-bg' : ''" @click="tab = 2">激励体系</span>
                <span :class="tab == 3 ? 'tab-bg' : ''" @click="tab = 3">团队效能</span>
                <span :class="tab == 4 ? 'tab-bg' : ''" @click="tab = 4">猎聘服务</span>
                <span :class="tab == 5 ? 'tab-bg' : ''" @click="tab = 5">人才发展与培养</span>
            </div>
            <div class="tabcontent">
                <div v-if="tab == 1">
                    <p class="line">
                        组织的有效性对战略实施有决定性影响，组织又是“人力资源”所依托的分布架构。随着技术发展，组织的形态也在快速演变，如分布式组织、赋能型组织、平台型组织等。组织变革是管理变革中的重要课题。</p>
                    <div class="tab1">
                        <div class="ullist">
                            <ul>
                                <div class="title">服务内容</div>
                                <li>组织能力评估</li>
                                <li>组织诊断与优化</li>
                                <li>岗位价值评估</li>
                                <li>定岗定编</li>
                                <li>关键流程设计</li>
                            </ul>
                            <ul class="rightul">
                                <li>董事会结构与议事规则</li>
                                <li>岗位体系</li>
                                <li>任职资格</li>
                                <li>人岗匹配</li>
                            </ul>
                        </div>
                        <img src="/imgs/application-cases-images/02.png" alt="" class="rightridusimg">
                    </div>
                </div>
                <div v-if="tab == 2">
                    <p class="line">
                        员工激励包含了常规激励和中长期激励两大类。其中常规激励主要是薪酬和绩效管理，而中长期激励则包括了项目式激励、利润分享、股权激励等。</p>
                    <div class="tab1">
                        <div class="ullist">
                            <ul>
                                <div class="title">服务内容</div>
                                <li>公司激励体系战略规划</li>
                                <li>基于能力的薪酬体系设计</li>
                                <li>基于目标的绩效管理体系设计</li>
                                <li>股权激励</li>
                                <li>项目式激励</li>
                            </ul>
                        </div>
                        <img src="/imgs/application-cases-images/03.png" alt="" class="rightridusimg">
                    </div>
                </div>
                <div v-if="tab == 3">
                    <p class="line">
                        组织的能力归根结底是员工和团队的能力，尤其是团队的能力。没有完美的个人，但有完美的团队优秀的团队是有“配方”和“基因”的，籍此可以设计个人和团队能力提升的策略和路径</p>
                    <div class="tab1">
                        <div class="ullist">
                            <ul>
                                <div class="title">服务内容</div>
                                <li>团队角色测评</li>
                                <li>岗位画像与团队风格</li>
                                <li>人才识别与风险管理</li>
                                <li>团队绩效诊断与评估</li>
                                <li>团队领导力提升与训练</li>
                            </ul>
                            <ul class="rightul">
                                <li>人才盘点与高潜人才</li>
                            </ul>
                        </div>
                        <img src="/imgs/application-cases-images/04.png" alt="" class="rightridusimg">
                    </div>
                </div>
                <div v-if="tab == 4">
                    <div class="line">
                        <div class="Sterling">南京毕至是Sterling宗汾的战略合作</div>
                        宗汾的前身为最早进入中国的国际猎头公司 HRC Sterling CDS INC.；宗汾于 2018 年 6 月，成为全球知名 HR 咨询联盟 Arbora 在中国的唯一代表及唯一成员，该联盟遍布世界
                        35 个国家。国际国内人才寻访、多年积累高端人才库、多年猎头行业经验、响应速度快、候选人匹配度高。
                    </div>
                    <div class="tab1">
                        <div class="ullist">
                            <ul>
                                <div class="title">服务内容</div>
                                <li>团队、岗位匹配度评估</li>
                                <li>岗位画像</li>
                                <li>定向挖掘</li>
                                <li>招聘代理</li>
                            </ul>
                            <ul class="rightul">
                                <li>岗位素质模型</li>
                                <li>人才搜寻</li>
                                <li>背景调查</li>
                                <li>人才测评</li>
                            </ul>
                        </div>
                        <img src="/imgs/application-cases-images/05.png" alt="" class="rightridusimg">
                    </div>
                </div>
                <div v-if="tab == 5">
                    <div class="line">
                        组织的有效性对战略实施有决定性影响，组织又是“人力资源”所依托的分布架构。随着技术发展，组织的形态也在快速演变，如分布式组织、赋能型组织、平台型组织等。组织变革是管理变革中的重要课题。
                    </div>
                    <div class="tab1">
                        <div class="ullist">
                            <ul>
                                <div class="title">服务内容</div>
                                <li>培训需求评估</li>
                                <li>培训方案设计</li>
                                <li>培训组织实施</li>
                                <li>培训效果评估</li>
                                <li>职业生涯规划</li>
                            </ul>
                            <ul class="rightul">
                                <li>沙盘类</li>
                                <li>高管教练类</li>
                                <li>领导力类</li>
                                <li>生产管理与员工技能类</li>
                                <li>EAP…</li>
                            </ul>
                        </div>
                        <img src="/imgs/application-cases-images/06.png" alt="" class="rightridusimg">
                    </div>
                </div>

            </div>
        </div>
        <div class="human-resources">
            <p class="partTitle">人力资源云平台</p>
            <p class="englishTrans">Human Resources Cloud Platform</p>
            <p class="partwords">构建从现在到未来的，满足企业战略及业务发展需求的人力资源系统平台</p>
            <div class="boxdiv">
                <div class="box">
                    <div>
                        <img src="/imgs/application-cases-images/07.png" alt="">
                        <span>面向未来</span>
                    </div>
                    <p class="target">人力资源管理目标</p>
                    <div class="hithumenresource">打通人力资源管理各模块，形成面向未来的人</div>
                    <div class="uldata">
                        <ul>
                            <li>推动人才发展机制形成</li>
                            <li>以综合能力为核心的平台</li>
                        </ul>
                        <ul>
                            <li>人员全面管理</li>
                        </ul>
                    </div>
                </div>
                <div class="box">
                    <div>
                        <img src="/imgs/application-cases-images/08.png" alt="">
                        <span>满足现在</span>
                    </div>
                    <p class="target">人力资源管理基础</p>
                    <div class="hithumenresource">充分满足现阶段提升人力资源管理效率的要求</div>
                    <div class="uldata">
                        <ul>
                            <li>组织、岗位、职级等基础管理要求</li>
                            <li>智能话的人事管理</li>
                        </ul>

                    </div>
                </div>
                <div class="box">
                    <div>
                        <img src="/imgs/application-cases-images/09.png" alt="">
                        <span>转变提升</span>
                    </div>
                    <p class="target">人力资源管理核心</p>
                    <div class="hithumenresource">变管理为服务，提升人力资源各项能力</div>
                    <div class="uldata">
                        <ul>
                            <li>适宜的绩效考核方式</li>
                            <li>动态的薪酬体系</li>
                        </ul>
                        <ul>
                            <li>员工充分参与</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="purplePart">
            <div>
                <div>
                    <p class="SAP">SAP SuccessFactors 人力资源云，集成的、全面的人才管理与核心HCM应用，帮助企业提高效率、整合HR业务，落实人才管理及人力资本管理战略，实现员工全生命周期管理
                    </p>
                    <div class="imgsSquare">
                        <img src="/imgs/application-cases-images/11.png" alt="">
                        <img src="/imgs/application-cases-images/12.png" alt="">
                        <img src="/imgs/application-cases-images/13.png" alt="">
                        <img src="/imgs/application-cases-images/14.png" alt="">
                        <div class="img-word img1-word">
                            <p>1.</p>
                            <p>移动端与企业社交协同</p>
                        </div>
                        <div class="img-word img2-word">
                            <p>2.</p>
                            <p>人力资本分析与规划</p>
                        </div>
                        <div class="img-word img3-word">
                            <p>3.</p>
                            <p>能力 | 技能 | 最佳实践</p>
                        </div>
                        <div class="img-word img4-word">
                            <p>4.</p>
                            <p>技术: 安全 | 集成 | 拓展</p>
                        </div>
                    </div>
                </div>
                <img src="/imgs/application-cases-images/15.png" alt="" class="SAPimg">
            </div>
        </div>
        <div class="mingDaoYun">
            <p class="partTitle">明道云</p>
            <p class="englishTrans" id="mingDaoYunWords">Mingdao Yun</p>
            <div class="whitePart">
                <div class="whiteDiv">
                    <div class="blockcontent">
                        <img src="/imgs/application-cases-images/16.png" alt="">
                        <div>
                            <p>快速实现</p>
                            <p>比定制开发提高百倍效率</p>
                        </div>
                    </div>
                    <div class="blockcontent">
                        <img src="/imgs/application-cases-images/17.png" alt="">
                        <div>
                            <p>简单易用</p>
                            <p>可视化搭建，无需编程</p>
                        </div>
                    </div>
                    <div class="blockcontent">
                        <img src="/imgs/application-cases-images/18.png" alt="">
                        <div>
                            <p>灵活调整</p>
                            <p>伴随业务发展不断扩充范畴</p>
                        </div>
                    </div>
                    <div class="blockcontent">
                        <img src="/imgs/application-cases-images/19.png" alt="">
                        <div>
                            <p>安全可靠</p>
                            <p>高稳定，高并发，高可用设计</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="left">
                    <p>拖拉拽构建系统模型，领先的模型驱动</p>
                    <p>完全可视化搭建关系型数据结构</p>
                    <p>跨表跨应用数据互联互通</p>
                    <p>高达32种控件，多达58种函数</p>
                    <p>业务规则定义，智能页面运行</p>
                    <p>个性化布局，多终端自动适配</p>
                    <p>单表千万级数据支撑，复杂业务无忧</p>

                    <p class="bolder">必不可少的数据分析，洞察业务走势</p>
                    <p>9种图表类型，自定义图表样式</p>
                    <p>支持数据钻取，深度数据探索</p>
                    <p>统计数据导出分享，使用不受限</p>
                    <p>嵌入数据导出分享，使用不受限</p>
                </div>
                <div class="center">
                    <img src="/imgs/application-cases-images/20.png" alt="">
                </div>
                <div class="right">
                    <p>多面手工具</p>
                    <p>超高效率构建数据管理、流程、自动化、仪表台、填报和部门级等场景应用；规划和实现价值全环节（采购、生产、销售、交付等）一体化应用解决方案；基于权限定义进行的应用分支</p>
                    <p class="bolder">赋能业务团队</p>
                    <p>中等及以下复杂度的应用可由业务部门直接主导；简单应用可以赋予全员实现能力；IT部门可以再次赋能业务部门，建立低代码/零代码能力中心。</p>
                    <p class="bolder">支撑业务创新</p>
                    <p>支持业务创新，数字化能力不在滞后跟进，且能够通过增强的数字化能力实现组织和业务模式创新。</p>
                </div>
            </div>
        </div>
        <!-- 安源科技删除 -->
        <!-- <div class="AnyuanTechnology">
            <p class="partTitle">安元科技</p>
            <p class="englishTrans">Anyuan Technology</p>
            <div class="content">
                <div class="left">
                    <p>安元科技是依托南京工业大学的产学研一体化高新技术企业、国家级专精特新“小巨人”企业、国家级工业互联网平台企业。由深圳创投集团、前海母基金、松禾资本、国中创投等大型知名创投机构参与战略投资，致力于为大型企业和园区提供工业互联网+安全生产、+智慧园区、+智能工厂等产品解决方案。
                    </p>
                    <p>安元科技荟集了600多名由教授、博士、硕士组成的云计算、物联网、大数据、安全工程、应急管理等领域的高级人才团队，致力于国内领先的工业互联网、工业物联网、工业大数据等产品技术研发及产业化建设。研发出的核心产品技术获得国家科技进步奖与多项省部级奖励，被国家应急管理部、工信部、科技部等部委重点推荐，已在全国十几个省/直辖市地区得到了广泛应用。
                    </p>
                    <p>安元科技作为多个国家级科技支撑平台承担单位，始终秉承“让城市与工业更安全、更智慧”的企业使命，提供智慧城市、智慧园区、智慧企业的整体解决方案。通过不断的战略创新、组织创新、技术创新、模式创新、服务创新把安元打造成百亿级工业互联网全要素型集团公司。
                    </p>
                </div>
                <div class="right">
                    <img src="/imgs/application-cases-images/21.png" alt="">
                </div>
            </div>
        </div> -->
        <div class="SmartPartyBuilding">
            <p class="partTitle">智慧党建</p>
            <p class="englishTrans">Smart Party Building</p>
            <p class="partwords">用信息化手段推进党务公开，构建全流程一体化党建在线服务平台</p>
            <div class="content">
                <div>
                    <p>通过党建工作移动化、数字化、智能化实现特色互联网+党建品牌，具有政府、高校及企事业三个版本。</p>
                    <p>以党建云平台为基础,打通各党组织机构,通过PC端、手机、大数据端 等多终端展现，提供云-管-端一体的综合解决方案。</p>
                </div>
                <img src="/imgs/application-cases-images/22.png" alt="">
            </div>
            <div class="valus">
                <p>功能价值</p>
            </div>
            <p class="focus">聚焦八大主题，全面建设学习型、服务型、创新型、廉洁型、务实型党组织，提升党务工作效率，升级工作方式；活跃党组织生活，树立先锋模范。</p>
            <div class="systems">
                <img src="/imgs/application-cases-images/23.png" alt="" class="img1">
                <img src="/imgs/application-cases-images/24.png" alt="" class="img2">
            </div>
        </div>
        <div class="Signatures">
            <p class="partTitle">电子签章</p>
            <p class="englishTrans">Signatures</p>
            <p class="partwords">在数字化签章、数字化印控、数字化档案、可信身份四个方面助力组织全面数字化，让数字化的成果真实可信</p>
            <div class="electronicContract">
                <img src="/imgs/application-cases-images/25.png" alt="">
                <p class="title">一体化电子签约印章管控平台</p>
                <p class="words">方便组织对物理印章安全管理、分支机构用印授权管理、电子化签约管理和对所有用印的纸质文件和电子文件统一管理，解决纸质合同及印章管理难题。</p>
            </div>
            <div class="powerOfAttorney">
                <div>
                    <p>把印章装入手机</p>
                    <p>随时随地可对印章授权、使用、监控！</p>
                </div>
                <img src="/imgs/application-cases-images/26.png" alt="" class="img1">
                <img src="/imgs/application-cases-images/27.png" alt="" class="img2">
            </div>
        </div>
        <bottomVue />
    </div>
</template>

<script>
import abouttop from "../../components/about-top/top.vue";
import bottomVue from '../../components/home-bottom/bottom.vue';

export default {
    data() {
        return {
            tab: 1,//tab切换需要这个下标
        }
    },
    components: {
        abouttop,
        bottomVue
    },
    
}
</script>

<style scoped lang="scss">
.top {
    height: 680px;
    width: 100%;
    background: url('/imgs/application-cases-images/01.png') no-repeat center;
    background-size: 100%;
}

.partTitle {
    font-size: 20px;
    text-align: center;
    font-weight: bolder;
    padding-bottom: 4px;
}

.englishTrans {
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    color: lightgray;
}

.partwords {
    padding: 40px 0;
    font-size: 14px;
    color: #333333;
    text-align: center;
}

.grayarea {
    background: #F8F8F8;
    padding: 60px 0;
}

.applicationcase {
    font-size: 20px;
    font-weight: bolder;
    padding-bottom: 4px;
    text-align: center;
}

.completion {
    font-size: 20px;
    font-weight: blod;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 60px;
    color: lightgray;
}

.tab {
    width: 1200px;
    height: 58px;
    margin: auto;
    border-radius: 29px;
    border: 1px solid #2F1E67;
    display: flex;
    margin-bottom: 30px;

    span {
        color: #2F1E67;
        font-size: 16px;
        width: 240px;
        text-align: center;
        line-height: 58px;
        cursor: pointer;
    }

    .tab-bg {
        background: #2F1E67;
        color: white;
        border-radius: 29px;
        border: 1px solid #2F1E67;
    }
}

.tabcontent {
    width: 1200px;
    margin: auto;

    .line {
        width: 1200px;
        font-size: 14px;
        color: #777777;
        margin: 30px auto;
        line-height: 2;
    }

    .title {
        font-size: 16px;
        color: #333333;

    }

    .title::before {
        content: '';
        display: inline-block;
        width: 4px;
        height: 12px;
        background: #2F1E67;
        border-radius: 2px;
        margin-right: 5px;
    }

    ul {
        font-size: 14px;
        color: #10143B;
        list-style: none;
        line-height: 2.2;
        margin-top: 10px;
        margin-right: 30px;

        li::before {
            content: '';
            display: inline-block;
            background: #2F1E67;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 5px;
        }
    }

    .rightul {
        margin-top: 45px;
    }

    .ullist {
        display: flex;
    }

    .rightridusimg {
        width: 837px;
    }

    .tab1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .Sterling {
        font-weight: 600;
        font-size: 14px;
    }
}

.human-resources {
    width: 1200px;
    padding: 60px 0 98px;
    margin: auto;

    .boxdiv {
        display: flex;
        justify-content: space-between;
    }

    .box {
        width: 386px;
        height: 194px;
        border-radius: 20px;
        background: rgba(#774EFF, 0.05);
        padding: 20px;
        box-sizing: border-box;

        img {
            width: 19px;
            margin-right: 7px;
            vertical-align: middle;
        }

        span {
            font-size: 18px;
            font-weight: bolder;
        }

        .target {
            padding: 10px 0 20px;
            font-size: 16px;
            font-weight: bolder;
        }

        .hithumenresource {
            font-weight: 400;
            color: #333333;
            line-height: 17px;
            font-size: 12px;
        }

        .uldata {
            display: flex;
            justify-content: space-between;
        }

        ul {
            color: #10143B;
            font-size: 14px;
            padding: 12px;
        }
    }
}

.purplePart {
    width: 100%;
    height: 390px;
    padding: 80px 0;
    background: url("/imgs/application-cases-images/10.png");
    background-size: 100%;

    &>div:first-child {
        width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .SAP {
            color: white;
            width: 410px;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 19px;
        }

        .imgsSquare {
            width: 410px;
            font-size: 0;
            position: relative;

            &>img {
                width: 205px;
            }

            .img-word {
                color: white;

                &>p:first-child {
                    font-size: 24px;
                    margin-bottom: 20px;
                }

                &>p:last-child {
                    font-size: 14px;
                }
            }

            .img1-word {
                position: absolute;
                top: 30px;
                left: 20px;
            }

            .img2-word {
                position: absolute;
                top: 30px;
                left: 228px;
            }

            .img3-word {
                position: absolute;
                top: 160px;
                left: 20px;
            }

            .img4-word {
                position: absolute;
                top: 160px;
                left: 228px;
            }
        }

        .SAPimg {
            width: 750px;
        }
    }
}

.mingDaoYun {
    background: #F8F8F8;
    padding: 60px 0;

    &>.whitePart {
        background: white;
    }

    #mingDaoYunWords {
        margin-bottom: 40px;
    }

    .whiteDiv {
        width: 1200px;
        margin: auto;
        height: 90px;
        display: flex;
        justify-content: space-between;

        .blockcontent {
            display: flex;
            align-items: center;
        }

        img {
            width: 45px;
            height: 45px;
            margin-right: 15px;
            vertical-align: middle;
        }
    }

    .bottom {
        width: 1200px;
        margin: auto;
        padding-top: 106px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            margin-top: -30px;
            font-size: 12px;
            line-height: 2;

            &>p:first-child {
                padding-bottom: 20px;
                font-size: 14px;
                font-weight: bolder;
            }

            .bolder {
                font-weight: bolder;
                font-size: 14px;
                margin: 59px 0 20px;
            }
        }

        .center {
            img {
                width: 580px;
            }
        }

        .right {
            font-size: 12px;
            line-height: 2;
            width: 290px;

            &>p:first-child {
                padding-bottom: 9px;
                font-size: 14px;
                font-weight: bolder;
            }

            .bolder {
                font-weight: bolder;
                font-size: 14px;
                margin: 20px 0 10px;
            }
        }
    }
}

.AnyuanTechnology {
    padding: 60px 0 94px;

    .content {
        width: 1200px;
        margin: auto;
        padding-top: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            width: 811px;

            p {
                margin-bottom: 50px;
            }
        }

        img {
            width: 312px;
        }
    }

}

.SmartPartyBuilding {
    padding: 60px 0 123px;
    background: #F8F8F8;

    .content {
        width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            margin-bottom: 50px;
            width: 560px;
            font-size: 16px;
        }

        img {
            width: 600px;
        }
    }

    .valus {
        display: flex;
        justify-content: center;
        margin: 54px 0;

        p {
            width: 112px;
            height: 50px;
            background: #880402;
            border-radius: 10px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
        }
    }

    .focus {
        margin-bottom: 54px;
        font-size: 16px;
        text-align: center;
    }

    .systems {
        width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;

        .img1 {
            width: 596px;
        }

        .img2 {
            width: 564px;
        }
    }
}

.Signatures {
    padding: 60px 0 189px;

    .electronicContract {
        width: 1200px;
        margin: auto;
        text-align: center;
        border: 1px solid #452C98;
        border-radius: 40px;
        padding: 40px;

        img {
            width: 1120px;
            border: 1px dashed;
        }

        .words {
            text-align: left;
            font-size: 14px;
            color: #777777;
        }

        .title {
            font-size: 16px;
            font-weight: bolder;
            text-align: left;
            margin: 40px 0 13px;
        }
    }
    .powerOfAttorney{
        padding-top: 41px;
        width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        div{
            line-height: 2;
            font-size: 18px;
            font-weight: bolder;
            color: #333333;
        }
        .img1{
            width:305px;
        }
        .img2{
            width:249px;
        }
    }
}
</style>