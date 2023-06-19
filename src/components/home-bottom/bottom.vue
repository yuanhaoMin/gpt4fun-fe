<template>
    <div class="bottom-box">
        <div class="bton">
            <div class="left">
                <ul>
                    <li>友情链接</li>
                    <li><a href="http://bizcamp.com.cn/">毕至咨询</a></li>
                    <li><a href="http://a-y.com.cn/AYwebsite/home">安元科技</a></li>
                    <li><a href="https://www.mingdao.com/">明道云</a></li>
                    <li><a href="https://www.qiyuesuo.com/">契约锁</a></li>
                </ul>
                <ul>
                    <li>技术支持</li>
                    <li>南京毕至企业管理咨询有限公司</li>
                </ul>
                <ul>
                    <li>联系我们</li>
                    <li>lby@bizcamp.com.cn</li>
                    <li>sjq@bizcamp.com.cn</li>
                    <li>hhf@bizcamp.com.cn</li>
                </ul>
            </div>
            <div class="right">
                <div><img src="/0.png" alt=""></div>
                <div>毕至咨询公众号</div>
            </div>
        </div>
        <div class="secure">
            <div>ICP备案:</div>
            <div>公安备案:</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
.bottom-box {
    height: 330px;
    background-color: #190044;
    display: flex;
    flex-direction: column;
    align-items: center;

    .bton {
        width: 1200px;
        height: 270px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

        .left {
            width: 600px;
            display: flex;
            justify-content: space-between;


            ul {
                display: flex;
                list-style: none;
                align-items: center;
                flex-direction: column;
                text-decoration: none;

                a {
                    text-decoration: none;
                    color: rgba(255, 255, 255, 0.8);
                }

                li {
                    line-height: 2.5;
                }

                li:first-child {
                    font-size: 20px;
                    font-weight: 500;
                    color: #FFFFFF;

                }

                li:not(:first-child) {
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.8);

                }
            }
        }

        .right {
            font-size: 20px;
            font-weight: 500;
            color: #FFFFFF;

            img {
                width: 146px;
                height: 146px;
            }
        }
    }

    .secure {
        width: 320px;
        height: 60px;
        line-height: 60px;
        display: flex;
        font-weight: 500;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
        justify-content: space-between;
    }
}
</style>