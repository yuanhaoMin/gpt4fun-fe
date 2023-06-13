<template>
    <!-- <el-empty :image-size="200" /> -->
    <div class="contact">
        <div class="brief">
            <h1>南京毕至企业管理咨询有限公司</h1>
            <br>
            <div>工作日9:00-18:00</div>
            <br>
            <div>ADDRESS:江苏省南京市江宁区双龙大道武夷凌云阁B座824</div>
            <br>
            <div>E-MAIL: <a href="mailto:lby@bizcamp.com.cn">[email:lby@bizcamp.com.cn]</a></div>
            <div>E-MAIL: <a href="mailto:hhf@bizcamp.com.cn">[email:hhf@bizcamp.com.cn]</a></div>
            <div>E-MAIL: <a href="mailto:ljq@bizcamp.com.cn">[email:ljq@bizcamp.com.cn]</a></div>
            <br>
            <div>TEL:19941774636</div>
            <br>
            <div>
                <img src="/0.png" alt="" class="wx">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.contact {
    box-sizing: border-box;
    border: 3px solid;
    border-radius: 30px;
    padding: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.brief {
    width: 600px;
    height: 540px;
}

.wx {
    width: 200px;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: red;
}
</style>