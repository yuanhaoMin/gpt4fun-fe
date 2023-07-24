<template>
    <div class="price-page">
        <el-button type="info" plain @click="this.$router.back()" class="give-back">返回上一页</el-button>
        <h1>价格</h1>
        <p>我们力求通过科学的特性组合，让不同需求的用户感到物超所值</p>
        <div class="tab">
            <div class="tab-s">
                <div :class="tab == 1 ? 'tab-bg' : ''" @click="tab = 1" class="border-l">基础版</div>
                <div :class="tab == 2 ? 'tab-bg' : ''" @click="tab = 2">专业版</div>
                <!-- <div :class="tab == 3 ? 'tab-bg' : ''" @click="tab = 3" class="border-r">终身版</div> -->
            </div>
        </div>
        <div class="number" v-show="tab == 1">
            <div>
                <div>￥<em>96</em><span>元</span></div>
                <s>原价￥114</s>
                <div>3个月</div>
                <div> <el-button type="primary" round @click="basicbuy(96)">购买</el-button></div>
            </div>
            <div>
                <div>￥<em>182</em><span>元</span></div>
                <s>原价￥228</s>
                <div>6个月</div>
                <div> <el-button type="primary" round @click="basicbuy(182)">购买</el-button></div>
            </div>
            <div>
                <div>￥<em>319</em><span>元</span></div>
                <s>原价￥456</s>
                <div>12个月</div>
                <div> <el-button type="primary" round @click="basicbuy(319)">购买</el-button></div>
            </div>
            <div>
                <div>￥<em>{{ preferential }}</em> <span>元</span></div>
                <s>原价￥{{ cost }}</s>
                <div class="addReduceNum">
                    <button @click="reduceNum">-</button><input type="number" readonly v-model.number="num"
                        @input="handleNum"><button @click="addNum">+</button>
                    <span class="month">个月</span>
                </div>
                <div> <el-button type="primary" round @click="basicbuy(preferential)">购买</el-button></div>
            </div>
        </div>
        <div class="number" v-show="tab == 2">
            <div>
                <div>￥<em>224</em><span>元</span></div>
                <s>原价￥264</s>
                <div>3个月</div>
                <div> <el-button type="primary" round @click="specialitybuy(224)">购买</el-button></div>
            </div>
            <div>
                <div>￥<em>422</em><span>元</span></div>
                <s>原价￥528</s>
                <div>6个月</div>
                <div> <el-button type="primary" round @click="specialitybuy(422)">购买</el-button></div>
            </div>
            <div>
                <div>￥<em>739</em><span>元</span></div>
                <s>原价￥1056</s>
                <div>12个月</div>
                <div> <el-button type="primary" round @click="specialitybuy(739)">购买</el-button></div>
            </div>
            <div>
                <div>￥<em>{{ preferential1 }}</em><span>元</span></div>
                <s>原价￥{{ cost1 }}</s>
                <div class="addReduceNum">
                    <button @click="reduceNum1">-</button>
                    <input type="number" readonly v-model.number="num1" />
                    <button @click="addNum1">+</button>
                    <span class="month">个月</span>
                </div>
                <div> <el-button type="primary" round @click="specialitybuy(preferential1)">购买</el-button></div>
            </div>
        </div>
        <!-- <div class="number" v-show="tab == 3">
            <div>
                <div>￥<em>1688</em><span>元</span></div>
                <div>永久使用</div>
                <div> <el-button type="primary" round @click="lifebuy(1688)">购买</el-button></div>
            </div>
        </div> -->
        <div class="tabulation">
            <ul>
                <li></li>
                <li class="bold">基础功能</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li class="bold">高级功能</li>
                <li></li>
                <li></li>
                <li class="bold">后继功能</li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li>毕至AI助手</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>招聘AI助手</li>
                <li>分类场景助手</li>
                <li></li>
                <li>分析AI助手</li>
                <li>开发中</li>
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li>对话</li>
                <li></li>
                <li></li>
                <li>问答</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>基础版</li>
                <li>专业版</li>
                <li></li>
                <li>联网/离线</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul class="Transfer">
                <li>基础版</li>
                <li></li>
                <li></li>
                <li></li>
                <li>&#10004</li>
                <li>&#10006</li>
                <li></li>
                <li>&#10004</li>
                <li></li>
                <li>&#10004</li>
                <li>&#10006</li>
                <li></li>
                <li>&#10006</li>
                <li>&#10006</li>
            </ul>
            <ul class="Transfer">
                <li>专业版</li>
                <li></li>
                <li></li>
                <li></li>
                <li>&#10004</li>
                <li>&#10004</li>
                <li></li>
                <li>&#10004</li>
                <li></li>
                <li>&#10004</li>
                <li>&#10004</li>
                <li></li>
                <li>&#10004</li>
                <li>&#10004</li>
            </ul>
        </div>
    </div>
</template>
 
<script>
import { payment } from "../api/payment"
export default {
    name: 'NewEditionPriceList',
    data() {
        return {
            cost: 38,
            num: 1,
            preferential: 34,
            cost1: 88,
            num1: 1,
            preferential1: 79,
            tab: 1
        };
    },
    watch: {
        num: {
            handler(newValue, oldVal) {
                switch (newValue) {
                    case 1:
                        this.cost = 38;
                        this.preferential = 34;
                        break;
                    case 2:
                        this.cost = 76;
                        this.preferential = 68;
                        break;
                    case 3:
                        this.cost = 114;
                        this.preferential = 96;
                        break;
                    case 4:
                        this.cost = 152;
                        this.preferential = 129;
                        break;
                    case 5:
                        this.cost = 190;
                        this.preferential = 161;
                        break;
                    case 6:
                        this.cost = 228;
                        this.preferential = 182;
                        break;
                    case 7:
                        this.cost = 266;
                        this.preferential = 212;
                        break;
                    case 8:
                        this.cost = 304;
                        this.preferential = 243;
                        break;
                    case 9:
                        this.cost = 342;
                        this.preferential = 256;
                        break;
                    case 10:
                        this.cost = 380;
                        this.preferential = 285;
                        break;
                    case 11:
                        this.cost = 418;
                        this.preferential = 313;
                        break;
                    case 12:
                        this.cost = 456;
                        this.preferential = 319;
                        break;

                    default:
                        break;
                }
            },
            deep: true,
        },
        num1: {
            handler(newValue, oldVal) {
                switch (newValue) {
                    case 1:
                        this.cost1 = 88;
                        this.preferential1 = 79;
                        break;
                    case 2:
                        this.cost1 = 176;
                        this.preferential1 = 158;
                        break;
                    case 3:
                        this.cost1 = 264;
                        this.preferential1 = 224;
                        break;
                    case 4:
                        this.cost1 = 352;
                        this.preferential1 = 299;
                        break;
                    case 5:
                        this.cost1 = 440;
                        this.preferential1 = 374;
                        break;
                    case 6:
                        this.cost1 = 528;
                        this.preferential1 = 422;
                        break;
                    case 7:
                        this.cost1 = 616;
                        this.preferential1 = 492;
                        break;
                    case 8:
                        this.cost1 = 704;
                        this.preferential1 = 563;
                        break;
                    case 9:
                        this.cost1 = 792;
                        this.preferential1 = 594;
                        break;
                    case 10:
                        this.cost1 = 880;
                        this.preferential1 = 660;
                        break;
                    case 11:
                        this.cost1 = 968;
                        this.preferential1 = 726;
                        break;
                    case 12:
                        this.cost1 = 1056;
                        this.preferential1 = 739;
                        break;
                    default:
                        break;
                }
            },
            deep: true,
        }
    },
    methods: {
        reduceNum() {
            if (this.num <= 1) return;
            this.num -= 1;
        },
        addNum() {
            if (this.num >= 12) return;
            this.num += 1;
        },
        reduceNum1() {
            if (this.num1 <= 1) return;
            this.num1 -= 1;
        },
        addNum1() {
            if (this.num1 >= 12) return;
            this.num1 += 1;
        },
        async basicbuy(num) {
            let res = await payment({ username: this.$store.state.username, amount: num, dev_mode: false });
            window.open(res.url)
        },
        async specialitybuy(num) {
            let res = await payment({ username: this.$store.state.username, amount: num, dev_mode: false });
            window.open(res.url)
        },
        // async lifebuy(num) {
        //     let res = await payment({ username: this.$store.state.username, amount: num, dev_mode: false });
        //     window.location.href = res.url;
        // }
    },
};
</script>

<style lang="scss" scoped>
.price-page {
    background-color: #03001b;
    box-sizing: border-box;
    color: #bfbfbf;

    .give-back {
        width: 120px;
        height: 40px;
        margin: 20px 0 0 20px;
    }

    h1 {
        text-align: center;
        padding: 50px 0 20px 0;
    }

    h1+p {
        text-align: center;
    }

    .tab {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        color: #03001b;

        .tab-s {
            display: flex;
            width: 720px;
            height: 60px;
            justify-content: center;

            .border-l {
                border-radius: 40px 0 0 40px;
            }

            .border-r {
                border-radius: 0 40px 40px 0;
            }

            .tab-bg {
                background-color: #3b93f3;
                color: white;
            }

            div {
                text-align: center;
                width: 240px;
                height: 60px;
                font-size: 22px;
                line-height: 60px;
                cursor: pointer;
                box-sizing: border-box;
                background-color: white;
                border-radius: 0 30px 30px 0;
            }
        }
    }

    .number {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        text-align: center;

        em {
            font-size: 48px;
            margin-right: 5px;
        }
    }

    .el-button.is-round {
        width: 150px;
        height: 40px;
    }

    .number>div {
        width: 278px;
        height: 240px;
        border-radius: 8px;
        margin-right: 16px;
        background-color: #fff;
        color: #03001b;
        padding-top: 9px;
        box-sizing: border-box;
        box-shadow: 0px 2px 10px 0px #e6e6e6;
        transition: 0.2s all linear;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .addReduceNum {
        position: relative;

        button {
            padding: 5px 10px;
            font-size: 20px;
            border: 0;
            border-radius: 4px;
            cursor: pointer;
        }

        input {
            width: 20px;
            height: 30px;
            padding: 0 60px 0 10px;
            outline: 0;
            border: 0px;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none !important;
        }

        .month {
            position: absolute;
            left: 130px;
            top: 4px;
        }
    }

    .tabulation {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        padding-bottom: 10px;

        .bold {
            font-weight: 600;
        }

        .Transfer:hover {
            box-shadow: 0 0 1px 3px skyblue;
            box-sizing: border-box;

            li:first-child {
                color: white;
                background-color: skyblue;
            }

        }

        ul {
            width: 240px;
            list-style: none;
            text-align: center;



            li:first-child {
                border-bottom: 0px;
                font-weight: 600;
                font-size: 38px;
            }

            li {
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid;
                box-sizing: border-box;

            }
        }
    }
}
</style>