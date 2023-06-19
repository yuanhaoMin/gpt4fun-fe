<template>
    <div class="box">
        <abouttop />
    </div>
    <div class="butler-service">
        <div class="Margins">
            <div class="title">人才共享的高级管家服务</div>
            <div class="title-brother">Advanced butler services for talent sharing</div>
        </div>
        <div class="butler-service-content">
            <div class="butler-service-content-text">
                <div class="first-line">中小企业管理提升：解决人才紧缺和优化人才利用的关键策略</div>
                <div class="Line">中小企业正处在初创成长期，企业规模虽小，但创业者对管理方面的需求和标准却并不低，不但需要服务，而且需要高级服务；人才紧缺怎么办，改变人才观念，不求所有，但求所用。</div>
                <div class="second">
                    <div class="second-one">
                        <div class="section_2"></div>
                        <div class="section_1"></div>
                        <div class="section_2"></div>
                        <div class="section_1"></div>
                        <div class="section_2"></div>
                    </div>
                    <div class="second-two">
                        <div>企业需要更多的精力用在市场营销和技术提升等经营方面，企业内部需要有人协助管理，打造高业绩团队。</div>
                        <div class="second-two-two">为企业发展赋能，帮助企业管好家务、降低管理成本，提高团队绩效。</div>
                        <div>帮助企业建立内部风控管理体系，提前规划布局，为企业的良性发展打下坚实基础。</div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/imgs/about-us-images/02.png" alt="" class="butler-service-content-img">
            </div>
        </div>
    </div>
    <div class="cloud-platform">
        <div class="Margins">
            <div class="title">共通共享的数字化工作云平台</div>
            <div class="title-brother">A Shared Digital Chemical Work Cloud Platform</div>
        </div>
        <div class="cloud-platform-content">
            <div class="im-text">
                <div><img src="/imgs/about-us-images/03.png" alt=""></div>
                <div class="deep">数据驱动的决策力</div>
                <div>企业需要精准的数据和决策依据，快速反应，提高市场竞争力。</div>
            </div>
            <div class="im-text distance">
                <div><img src="/imgs/about-us-images/04.png" alt=""></div>
                <div class="deep">数据驱动的决策力</div>
                <div>企业需要规范有序和安全高效的系统保障</div>
            </div>
            <div class="im-text">
                <div><img src="/imgs/about-us-images/05.png" alt=""></div>
                <div class="deep">数据驱动的决策力</div>
                <div>企业需要提高效率、降低成本</div>
            </div>
        </div>
    </div>
    <div class="develop">
        <div class="Margins">
            <div class="title">传统数字化系统开发</div>
            <div class="title-brother">Development of traditional digital systems</div>
        </div>
        <div class="develop-text">
            随着国家智转数改政策的推行，各行各业都开始进行企业数字化转型。到现在为止，企业要么自己做系统开发，要么寻求软件供应商的产品进行购买。但是企业数字化是一件需要与企业运营管理和业务高度融合的工作，并不是购买了系统就可以真正进行数字化转型的。
        </div>
        <div class="box_4 flex-col">
            <!-- <div class="box_5 flex-col"></div> -->

            <div class="box_6 flex-col">
                <div class="text-wrapper_3 flex-col">
                    <span class="text_24">痛点一</span>
                </div>
                <div class="text-group_8">
                    <span class="text_25">自主开发系统难</span>
                    <span class="text_26">中小企业若要开发自己的系统,人员培养成本高。编程语言难掌握,开发人员用工成本高昂,且技术能力跟不上(物联网、AI、大数据、标识解析等)。</span>
                </div>
            </div>
            <div class="box_7 flex-col">
                <div class="text-wrapper_4 flex-col">
                    <span class="text_27">痛点二</span>
                </div>
                <div class="text-group_9">
                    <span class="text_28">定制化成本高</span>
                    <span class="text_29">中小企业若采用大部分友商产品，系统套装成品化严重，很难解决中小企业当下的问题，而且定制化成本高昂。</span>
                </div>
            </div>
            <div class="box_8 flex-col">
                <div class="text-wrapper_5 flex-col">
                    <span class="text_30">痛点三</span>
                </div>
                <div class="text-group_10">
                    <span class="text_31">多方信息汇集导致误差</span>
                    <span
                        class="text_32">中小企业如果想要用好系统，就要从前期调研诊断开始。包括企业整体的组织架构梳理、各部门业务流程梳理等等咨询工作，而大部分软件商并不具备企业管理咨询的能力，在第一步往往没有务实基础。在调研诊断之后才是系统的功能需求整合，这一步开始交给开发人员进行系统的设计、开发、测试及后续的上线、运维和使用培训。</span>
                </div>
            </div>
        </div>
    </div>
    <bottomVue />
</template>
   
<script>
import abouttop from "../../components/about-top/top.vue"
import bottomVue from '../../components/home-bottom/bottom.vue';
export default {
    components: {
        abouttop,
        bottomVue
    }
};
</script>
   
<style lang="scss" scoped>
.box {
    height: 680px;
    background: url(/imgs/about-us-images/01.png) no-repeat center;
    background-size: cover;
}



.Margins {
    padding: 60px;

    .title {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 4px;
    }

    .title-brother {
        font-size: 20px;
        color: silver;
        text-align: center;
        text-transform: uppercase;
    }
}

.butler-service {
    box-sizing: border-box;
    padding-bottom: 30px;

    .butler-service-content {
        display: flex;
        justify-content: center;

        .butler-service-content-text {
            height: 334px;
            width: 550px;
            margin-right: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .first-line {
                font-weight: 600;
            }

            .Line {
                font-size: 14px;
                color: #777777;
            }

            .second {
                width: 550px;
                height: 200px;
                box-sizing: border-box;
                background: #F5F5F5;
                border-radius: 20px;
                border: 1px solid #2F1E67;
                font-size: 14px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                .second-one {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 1px;
                    height: 120px;

                    .section_1 {
                        background-color: #e5e4e9;
                        width: 3px;
                        height: 50px;
                    }

                    .section_2 {
                        background-color: rgba(47, 30, 103, 1);
                        border-radius: 50%;
                        width: 10px;
                        height: 10px;
                    }
                }

                .second-two {
                    width: 480px;
                    display: flex;
                    flex-direction: column;

                    .second-two-two {
                        margin: 30px 0;
                    }
                }
            }
        }

        .butler-service-content-img {
            width: 610px;
            height: 300px;
            margin-top: 33px;
        }

    }
}

.cloud-platform {
    height: 463px;
    background: #F8F8F8;
    box-sizing: border-box;

    .cloud-platform-content {
        display: flex;
        justify-content: center;

        .distance {
            margin: 0 21px;
        }

        .im-text {
            width: 386px;
            height: 227px;
            background: #FFFFFF;
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;

            .deep {
                font-weight: 600;
            }

            div:last-child {
                font-size: 14px;
                color: #777777;
                text-align: center;
                width: 306px;
            }
        }

        img {
            width: 80px;
        }
    }
}

.develop {
    height: 984px;

    .develop-text {
        width: 1200px;
        margin: auto;
        height: 60px;
        font-weight: 600;
        text-align: center;
        line-height: 2;
        margin-bottom: 133px;
    }
}

.box_4 {
    background-image: url(/imgs/about-us-images/06.png);
    background-size: cover;
    width: 380px;
    height: 380px;
    margin: auto;
}


.box_6 {
    position: absolute;
    left: 468px;
    width: 352px;
    height: 202px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9ec0b3717b48b35e5b3787e04e1d3408475b36c0ed7bc3973e1ac51b2564afe7) 0px 0px no-repeat;
    background-size: 353px 202px;
}

.box_7 {
    position: absolute;
    left: 1085px;
    width: 352px;
    height: 202px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5fc6bac9828c68f2a6a53adb5f2571fcd084f583204666053317d72b4fdd8bb2) -1px 0px no-repeat;
    background-size: 353px 202px;
}

.box_8 {
    position: absolute;
    margin-top: 320px;
    left: 680px;
    width: 560px;
    height: 224px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7f421b7b931b67c30e65a0ae090a890b6f8e4a65349c4978521febde0e0724d3) 0px -1px no-repeat;
    background-size: 560px 225px;
}

.text-wrapper_3 {
    background-color: rgba(47, 30, 103, 1);
    border-radius: 11px;
    height: 30px;
    width: 82px;
    margin: 20px 0 0 124px;
}

.text_24 {
    width: 42px;
    height: 20px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    line-height: 20px;
    margin: 5px 0 0 20px;
}

.text-group_8 {
    width: 290px;
    height: 112px;
    margin: 20px 0 20px 20px;
    display: flex;
    flex-direction: column;
}

.text_25 {
    width: 112px;
    height: 22px;
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 600;
    text-align: left;
    white-space: nowrap;
    line-height: 22px;
    margin-left: 89px;
}

.text_26 {
    width: 290px;
    height: 80px;
    overflow-wrap: break-word;
    color: rgba(119, 119, 119, 1);
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: NaN;
    text-align: left;
    line-height: 20px;
    margin-top: 10px;
}


.text-wrapper_4 {
    background-color: rgba(47, 30, 103, 1);
    border-radius: 11px;
    height: 30px;
    width: 82px;
    margin: 20px 0 0 146px;
}

.text_27 {
    width: 42px;
    height: 20px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    line-height: 20px;
    margin: 5px 0 0 20px;
}

.text-group_9 {
    width: 290px;
    height: 92px;
    margin: 20px 0 40px 42px;
    display: flex;
    flex-direction: column;
}

.text_28 {
    width: 96px;
    height: 22px;
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 600;
    text-align: left;
    white-space: nowrap;
    line-height: 22px;
    margin-left: 97px;
}

.text_29 {
    width: 290px;
    height: 60px;
    overflow-wrap: break-word;
    color: rgba(119, 119, 119, 1);
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: NaN;
    text-align: left;
    line-height: 20px;
    margin-top: 10px;
}



.text-wrapper_5 {
    background-color: rgba(47, 30, 103, 1);
    border-radius: 11px;
    height: 30px;
    width: 82px;
    margin: 43px 0 0 239px;
}

.text_30 {
    width: 42px;
    height: 20px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    line-height: 20px;
    margin: 5px 0 0 20px;
}

.text-group_10 {
    width: 520px;
    height: 112px;
    margin: 20px 0 19px 20px;
    display: flex;
    flex-direction: column;
}

.text_31 {
    width: 160px;
    height: 22px;
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 600;
    text-align: left;
    white-space: nowrap;
    line-height: 22px;
    margin-left: 180px;
}

.text_32 {
    width: 520px;
    height: 80px;
    overflow-wrap: break-word;
    color: rgba(119, 119, 119, 1);
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: NaN;
    text-align: left;
    line-height: 20px;
    margin-top: 10px;
}
</style>