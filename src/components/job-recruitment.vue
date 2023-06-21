<template>
    <div class="box">
        <div class="Job-recruitment" @click="matching" ref="positionMatching">功能1:简历初筛</div>
        <div v-show="isShowUploadResume">
            <div class="Job-recruitment upload-resume">上传简历
                &emsp;<img src="/img/attachment.png" alt="" class="attachment">
                <input type="file" name="file" @change="uploadPDF" class="uploadPDFIpt" accept=".pdf">
            </div>
            <div class="Attachment-Name" v-if="fileName">
                <span class="fileNameDom">{{ fileName }}</span>
            </div>
        </div>
        <div class="Job-recruitment" @click="InterviewQuestion" ref="interviewGeneration">功能2:面试题目</div>
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
            Position: {
                name: "position_description",
                template_id: 10,
                model: "gpt-3.5-turbo"
            },
            interview: {
                name: "requirement",
                template_id: 12,
                model: "gpt-3.5-turbo"
            }
        }
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
            this.isShowUploadResume = true
            this.$refs.positionMatching.classList.add("selected");
            this.$refs.interviewGeneration.classList.remove("selected");
            let text = document.getElementsByClassName("input-textarea")[0]
            text.placeholder = "请先上传简历pdf,然后在此输入岗位要求: 例如:\n1.本科以上学历,3年以上移动端或App运营活动策划经验 \n2.熟悉银行客户经营工作，有银行 / 保险 / 证券等金融相关的活动运营相关经验者优先; \n3.熟悉移动端营销活动相关的产品逻辑，有一定的交互输出能力， 关注运营数据,善于挖掘总结经验;\n4.有出色的执行力、良好的沟通能力，团队协作精神;\n5.具有创新精神,勇于打破常规,敢于承担;\n6.有强烈的学习欲望和好奇心"
        },
        InterviewQuestion() {
            this.isShowUploadResume = false
            this.$refs.interviewGeneration.classList.add("selected");
            this.$refs.positionMatching.classList.remove("selected");
            let text = document.getElementsByClassName("input-textarea")[0]
            text.placeholder = "请输入你想考察的领域或技术:如: UI设计"
        },
        recruitment_event() {
            if (this.isShowUploadResume == true) {
                this.$store.commit('recruitment', this.Position)
            } else if (this.isShowUploadResume == false) {
                this.$store.commit('recruitment', this.interview)
            }
        }
    },
}
</script>

<style scoped>
.box {
    width: 278px;
    height: 314px;
    padding: 20px 15px;
    box-sizing: border-box;
}

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
    width: 150px;
    margin-left: 20%;
}

.attachment {
    vertical-align: middle;
    width: 22px;
    object-fit: contain;
}

.Attachment-Name {
    border: 1px solid lightgray;
    padding: 15px 0;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
    margin: 20px 0;
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

.selected {
    background-color: #d8d8d8;
    color: black;
}
</style>