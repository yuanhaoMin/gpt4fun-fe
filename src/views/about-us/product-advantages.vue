<template>
    <div>
        <div class="box">
            <abouttop />
        </div>
        <div class="service">
            <div class="Margins">
                <div class="title">毕至服务</div>
                <div class="title-brother">COMPLETION SERVICE</div>
                <div class="title-text">边咨询边上系统，将管理的思路和想法直接落在系统上</div>
            </div>
            <div class="center">
                <img src="/imgs/product-advantages-images/02.png" alt="" class="center-img">
                <div>
                    <div class="words words1">
                        <p class="blodwords">优秀的咨询师团队</p>
                        <p>拥有一支深厚的学识素养、丰富的企业实践经历和丰富的咨询经验的咨询师队伍，可提供英语、西班牙语咨询。</p>
                    </div>
                    <div class="circle circle1">01</div>
                </div>
                <div>
                    <div class="words words2">
                        <p class="blodwords">敏捷高效的快速响应</p>
                        <p id="response">7x24服务反馈</p>
                    </div>
                    <div class="circle circle2">02</div>
                </div>
                <div>
                    <div class="words words3">
                        <p class="blodwords blodwords3">善于激活团队</p>
                        <p>咨询方案解决的是机制问题，但企业真正需要解决的是人的问题，激活团队，焕发活力，提高工作积极性、提升组织绩效才是目标。</p>
                    </div>
                    <div class="circle circle3">03</div>
                </div>
                <div>
                    <div class="words words4">
                        <p class="blodwords blodwords4">及时搭建模块，解决企业痛点</p>
                        <p>在咨询辅导的过程中，发现企业堵点痛点，用先进的数字化工具和系统及时解决，一劳永逸。</p>
                    </div>
                    <div class="circle circle4">04</div>
                </div>
                <div>
                    <div class="words words5">
                        <p class="blodwords">陪伴企业一起成长</p>
                        <p id="longService">用长期服务、陪伴客户成长的方式服务客户，共生共赢。</p>
                    </div>
                    <div class="circle circle5">05</div>
                </div>
            </div>
        </div>
        <div class="digital-system">
            <div class="line1">为中小型企业打造专属成长型数字化系统</div>
            <div class="line1 line2">DIGITAL SYSTEM</div>
            <div class="line3">中小企业急需云平台的支撑，随着自己的需要逐渐搭建属于自己企业的系统，而数据系统又是一体化的，可随时共通共享</div>
            <div class="center">
                <div class="detailsimgdiv">
                    <img src="/imgs/product-advantages-images/03.png" alt="" class="leftimg">
                    <img src="/imgs/product-advantages-images/04.png" alt="" class="details-img">
                    <img src="/imgs/product-advantages-images/05.png" alt="" class="rightimg">
                </div>
                <div class="blockleft">
                    <div class="block1">
                        <p>成长性</p>
                        <p>从零到一专属化定制</p>
                    </div>
                    <div class="agility">
                        <div class="block1">
                            <p>敏捷性</p>
                            <p>开发周期短、成本低</p>
                        </div>
                    </div>
                    <div class="block1">
                        <p>易用性</p>
                        <p>一次开发，多端同步使用</p>
                    </div>
                </div>

                <div class="blockright">
                    <div class="block1">
                        <p>完整性</p>
                        <p>预集成“云大物智移”全能力</p>
                    </div>
                    <div class="agility">
                        <div class="block1">
                            <p>安全性</p>
                            <p>平台满足国标、国密依据</p>
                        </div>
                    </div>
                    <div class="block1">
                        <p>稳定性</p>
                        <p>安全产品体系集成</p>
                    </div>
                </div>
            </div>
        </div>
        <bottomVue />
    </div>
</template>

<script>
import abouttop from "../../components/about-top/top.vue";
import bottomVue from '../../components/home-bottom/bottom.vue';
export default {
    components: {
        abouttop,
        bottomVue
    },

}
</script>

<style lang="scss"  scoped>
.box {
    height: 680px;
    background: url(/imgs/product-advantages-images/01.png) no-repeat center;
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
        font-weight: 600;
    }

    .title-text {
        margin-top: 40px;
        text-align: center;
        font-size: 14px;
    }
}

.service {
    height: 913px;
    background: #F8F8F8;

    .center {
        text-align: center;
        margin-top: 70px;
        position: relative;

        .circle1 {
            position: absolute;
            top: -10px;
            left: 680px;
        }

        .circle2 {
            position: absolute;
            top: 200px;
            left: 680px;
        }

        .circle3 {
            position: absolute;
            top: -10px;
            left: 1170px;
        }

        .circle4 {
            position: absolute;
            top: 200px;
            left: 1170px;
        }

        .circle5 {
            position: absolute;
            top: 400px;
            left: 925px;
        }

        .words {
            text-align: right;

            p {
                font-size: 16px;
            }

            &>p:last-child {
                text-align: left;
                margin-top: 10px;
                font-size: 14px;
                width: 320px;
                display: inline-block;

            }
        }

        .words1 {
            position: absolute;
            top: -10px;
            left: 340px;
        }

        .words2 {
            position: absolute;
            top: 200px;
            left: 340px;

            #response {
                text-align: right;
            }
        }

        .words3 {
            position: absolute;
            top: -10px;
            left: 1240px;

            .blodwords3 {
                text-align: left;
            }
        }

        .words4 {
            position: absolute;
            top: 200px;
            left: 1240px;

            .blodwords4 {
                text-align: left;
            }
        }

        .words5 {
            position: absolute;
            top: 470px;
            left: 750px;
            text-align: ceneter;

            .blodwords {
                text-align: center;
            }

            #longService {
                width: 400px;
                text-align: center;
            }
        }

        .blodwords {
            font-weight: 600;
        }
    }

    .center-img {
        width: 380px;
    }

    .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2F1E67;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

}

.digital-system {
    padding: 60px 0;

    .line1 {
        text-align: center;
        font-weight: 600;
        font-size: 20px;
    }

    .line2 {
        color: lightgray;
    }

    .line3 {
        margin: 40px 0;
        text-align: center;

    }

    .detailsimgdiv {
        text-align: center;
    }

    .details-img {
        width: 620px;
        position: relative;
        top: 30px;
        cursor: pointer;
    }

    .leftimg {
        width: 380px;
        height: 572px;
        position: relative;
        left: 90px;
    }

    .rightimg {
        width: 380px;
        height: 572px;
        position: relative;
        left: -90px;
    }
}

.center {
    position: relative;

    .blockleft {
        position: absolute;
        top: 90px;
        left: 370px;
    }

    .blockright {
        position: absolute;
        top: 90px;
        left: 1190px;
    }

    .block1 {
        width: 340px;
        height: 114px;
        border-radius: 15px;
        border: 1px solid #2F1E67;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        background: white;

        &>p:first-child {
            font-size: 20px;
            padding-bottom: 9px;
            font-weight: 600;
        }

        &>p:last-child {
            font-size: 14px;
        }
    }

    .agility {
        margin: 75px 0;
    }

}
</style>