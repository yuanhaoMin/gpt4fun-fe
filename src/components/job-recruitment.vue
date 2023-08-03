<template>
    <div class="box">
        <div class="responsibility">岗位需求</div>
        <textarea name="" id="" cols="30" rows="10" :placeholder="Job" v-model="jobInformation" class="jobStyle"></textarea>
        <div @click="matching">
            <span>简历打分 :</span>&emsp;
            <el-switch v-model="isShowUploadResume" size="large" />
        </div>
        <div v-show="isShowUploadResume">
            <div class="Job-recruitment upload-resume">上传简历
                &emsp;<img src="/img/attachment.png" alt="" class="attachment">
                <input type="file" name="file" @change="uploadPDF" class="uploadPDFIpt" accept=".pdf">
            </div>
            <div class="Attachment-Name" v-if="fileName">
                <span class="fileNameDom">{{ fileName }}</span>
            </div>
        </div>
        <div @click="InterviewQuestion">
            <span>面试题生成 :</span>&emsp;
            <el-switch v-model="isShowPositionMatching" size="large" />
        </div>
        <div @click="portrait">
            <span>贝尔宾画像 :</span>&emsp;
            <el-switch v-model="isShowportraitOfBelbin" size="large" />
        </div>
    </div>
</template>

<script>
import { getData } from '../utils/store-crud';
import { ElMessage } from "element-plus";
export default {
    data() {
        return {
            fileName: '',
            baseUrl: "https://albatross21python.azurewebsites.net",
            isShowUploadResume: false,
            isShowPositionMatching: false,
            isShowportraitOfBelbin: true,
            jobInformation: '',
            Job: "",
            Position: {
                name: "position_description",
                template_id: 10,
                model: "gpt-3.5-turbo"
            },
            interview: {
                name: "requirement",
                template_id: 12,
                model: "gpt-3.5-turbo"
            },
            Belbin: {
                name: "position_description",
                template_id: 14,
                model: "gpt-3.5-turbo"
            },
        }
    },
    mounted() {
        this.portrait();
    },
    methods: {
        async uploadPDF(e) {
            let file = e.target.files[0];
            this.fileName = file.name;
            let formData = new FormData();
            formData.append('pdf_file', file);
            formData.append('username', getData("username"));
            formData.append('template_id', 10);
            const response = await fetch(this.baseUrl + '/file/openai/pdf', {
                method: "POST",
                body: formData,
            });
            if (response.status == 400) {
                ElMessage.error("简历的文本长度超过了GPT处理能力!");
                return;
            }
            await response.json();
        },
        matching() {
            this.isShowUploadResume = true;
            this.isShowportraitOfBelbin = this.isShowPositionMatching = false;
            this.Job = "请先上传简历pdf,然后在此输入岗位要求: 例如:\n1.本科以上学历,3年以上移动端或App运营活动策划经验 \n2.熟悉银行客户经营工作，有银行 / 保险 / 证券等金融相关的活动运营相关经验者优先; \n3.熟悉移动端营销活动相关的产品逻辑，有一定的交互输出能力， 关注运营数据,善于挖掘总结经验;\n4.有出色的执行力、良好的沟通能力，团队协作精神;\n5.具有创新精神,勇于打破常规,敢于承担;\n6.有强烈的学习欲望和好奇心"
        },
        InterviewQuestion() {
            this.isShowPositionMatching = true;
            this.isShowportraitOfBelbin = this.isShowUploadResume = false;
            this.Job = "请输入你想考察的领域或技术:如: UI设计"
        },
        portrait() {
            this.isShowportraitOfBelbin = true;
            this.isShowUploadResume = this.isShowPositionMatching = false
            this.Job = "请输入岗位需求, 将生成贝尔宾团队角色画像"
        },
        recruitment_event() {
            if (this.isShowUploadResume == true) {
                this.$store.commit('recruitment', this.Position);
            } else if (this.isShowPositionMatching == true) {
                this.$store.commit('recruitment', this.interview);
            } else if (this.isShowportraitOfBelbin == true) {
                this.$store.commit('recruitment', this.Belbin);
            }
        }
    },
}
</script>

<style  lang="scss" scoped>
.box {
    width: 278px;
    min-height: 314px;
    padding: 20px 0px 20px 40px;
    line-height: 3;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    background: #2F1E67;
    border-radius: 40px 0px 0px 40px;
    font-size: 16px;

    ::v-deep(.el-switch--large .el-switch__core) {
        border: 0;
    }

    ::v-deep(.el-switch.is-checked .el-switch__core) {
        background-color: #f9f9f9;
    }

    ::v-deep(.el-switch.is-checked .el-switch__core .el-switch__action) {
        background-color: #311a67;
    }

    ::v-deep(.el-switch__core) {
        background: #463176;
    }

    ::v-deep(.el-switch__core .el-switch__action) {
        background-color: #a298ba;
    }

    ::v-deep(.el-select .el-input__wrapper) {
        background-color: #463176 !important;
        box-shadow: none !important;
    }

    ::v-deep(.el-input__inner) {
        color: #FFFFFF;
    }

    .responsibility {
        background: #bfbfbf;
        width: 220px;
        border-radius: 15px;
        text-align: center;
        color: black;
        font-weight: 700;
    }

    .jobStyle {
        margin-top: 20px;
        width: 220px;
        border-radius: 15px;
        background: #bfbfbf;
        outline: none;
        font-size: 16px;
        padding: 5px;
        box-sizing: border-box;
        resize: none;

        // ::-webkit-scrollbar {
        //     display: none;
        // }
    }
}

.Job-recruitment {
    margin-top: 10px;
    padding: 10px 0px;
    color: white;
    font-size: 20px;
    border-radius: 50px;
    text-align: center;
    cursor: pointer;
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: black;

    border-radius: 30px;
}

::-webkit-scrollbar-track {
    border-radius: 30px;
}

.jobRecruitmentText {
    width: 100%;
    resize: none;
    background-color: transparent;
    border-radius: 40px;
    margin: 20px 0;
    color: white;
    font-size: 20px;
    padding: 20px;
    box-sizing: border-box;
}

.upload-resume {
    position: relative;
    width: 140px;
    font-size: 16px;
    height: 20px;
    line-height: 20px;
    margin-left: 30px;
    border: 1px solid silver;
    border-radius: 30px;
}

.attachment {
    vertical-align: middle;
    width: 22px;
    object-fit: contain;
}

.Attachment-Name {
    width: 200px;
    font-size: 16px;
    height: 24px;
    margin-left: 30px;
    line-height: 16px;
    border: 1px solid lightgray;
    padding: 15px 0;
    color: white;
    border-radius: 30px;
    text-align: center;
    margin: 10px 0;
}

.fileNameDom {
    color: darkgray;
}

.uploadPDFIpt {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
}
</style>