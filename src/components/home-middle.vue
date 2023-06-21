<template>
  <div class="content">
    <!-- loading -->
    <div class="loading" v-show="isShowLoading">
      <img src="/img/loading.gif" alt="" />
    </div>
    <!-- 中间 -->
    <div :class="this.$store.state.isSpend == false ? 'home-middle-Unchanged' : 'home-middle-change'"
      class="home-middle-container">
      <!-- <exitButton /> -->
      <!-- 设置情景弹出框 -->
      <!-- <scenePopover /> -->
      <!-- 消息容器div -->
      <div class="messages-container" ref="messagesContainer" v-if="$route.fullPath != '/user'">
        <!-- Messages will appear here -->
      </div>
      <div class="bottom-border" v-if="$route.fullPath != '/user'">
        <div class="bottom-button">
          <el-button type="info" class="stop-generation" @click="stopGenerate" v-model="isStopGeneration">
            <template #icon>
              <img src="/imgs/bi-zhi-images/tingzhi.png" alt="">
            </template>
            停止生成
          </el-button>
          <el-button class="delete-button button" ref="resetButton" @click="resetChatHistory">
            <template #icon>
              <img src="/imgs/bi-zhi-images/qingkong.png" alt="">
            </template>
            清除记录
          </el-button>
          <el-button class="update-button button" ref="updateButton" @click="updateSystemMessage"
            v-show="this.$store.state.selected.isChatModeSelected ? true : false">
            <template #icon>
              <img src="/imgs/bi-zhi-images/shezhi.png" alt="">
            </template>
            设置情景
          </el-button>
        </div>
        <div class="input-box">
          <input placeholder="请输入对话内容" class="input-textarea textarea" ref="inputBox" @keydown.enter="sendMessage" />
          <button class="send-button button" ref="sendButton" type="button" @click="pageSending">
            <img src="/imgs/bi-zhi-images/fasong.png" alt="" class="send-icon" />
            发送
          </button>
        </div>
      </div>
      <scenePopover @scenarioContent="addContent" v-show="isShowScenarios" />
    </div>
    <!-- 右边 -->
    <div class="syan">
      <homeRight ref="homeRight" v-show="$route.fullPath == '/chat'"></homeRight>
      <jobRecruitment ref="jobRecruitment" v-show="$route.fullPath == '/recruit'"></jobRecruitment>
      <classifyingScenarios v-show="$route.fullPath == '/scene'"
        @sendUserMessageAndDisplayResponse="sendUserMessageAndDisplayResponse"></classifyingScenarios>
    </div>
    <userAccount class="userAccount"></userAccount>
  </div>
</template>
  
<script>
import { ElMessage } from "element-plus";
import { getData } from "../utils/store-crud";
import homeRight from "./home-right.vue";
import jobRecruitment from './job-recruitment.vue';
import exitButton from "./exit-button.vue";
import scenePopover from "./popover/scene-popover.vue";
import { info } from "../api/user";
import { transformTimestamp } from "../utils/time-format";
import classifyingScenarios from "./classifying-scenarios.vue";
import userAccount from '@/components/userAcccountMsg.vue'
export default {
  name: "HomeMiddle",
  components: {
    homeRight,
    exitButton,
    jobRecruitment,
    scenePopover,
    classifyingScenarios,
    userAccount
  },
  data() {
    return {
      baseUrl: "https://albatross21python.azurewebsites.net",
      baseLLMOpenAIUrl:
        "https://albatross21python.azurewebsites.net/llm/openai",
      // 调用后端API时的认证信息
      // TODO
      authUsername: "",
      // 聊天模式下的情景文本
      chatModeSystemMessage: "",
      // 测试模式
      testMode: false,
      //默认显示
      isshowshow: true,
      isShowLoading: false,
      senderAssistant: "senderAssistant",
      senderUser: "senderUser",
      isStopGeneration: false,
      template_args: [],
      isShowScenarios: false,
      dialogTableVisible: true
    };
  },
  created() {
    this.encodedCredentials = getData("token");
    this.authUsername = getData("username");
    // 用户刷新页面时清除历史记录
    // this.resetChatHistory();
    // 用户刷新页面加载历史记录
    this.loadChatHistory();
    this.expirationTime()
  },
  methods: {
    //查询
    async expirationTime() {
      let { data: res } = await info(this.$store.state.username);
      let time = transformTimestamp(res.subscription_end_time)
      var myDate = transformTimestamp(new Date())
      if (time <= myDate) {
        this.$refs.sendButton.classList.add("prohibit");
        this.$refs.inputBox.classList.add("prohibit");
      }
    },
    addContent(value) {
      this.$refs.inputBox.value = value
      this.isShowScenarios = false
    },
    stopGenerate() {
      this.isStopGeneration = true;
    },
    sendMessage(e) {
      if (!e.shiftKey && e.keyCode == 13) {
        e.cancelBubble = true; //ie阻止冒泡行为
        e.stopPropagation(); //Firefox阻止冒泡行为
        e.preventDefault(); //取消事件的默认动作*换行
        const userMessage = this.$refs.inputBox.value;
        if (!userMessage) {
          return ElMessage({
            message: "请输入内容!",
            type: "warning",
            duration: 800,
            grouping: true,
          });
        }
        this.sendUserMessageAndDisplayResponse();
      }
    },
    achieveLineBreak(str) {
      return str.replace(/(?:\r\n|\r|\n)/g, "<br>");
    },
    createAndAppendMessage(text, sender) {
      const messagesContainer = this.$refs.messagesContainer;
      const messageElement = document.createElement("div");
      const messageParagraph = document.createElement("p");
      messageParagraph.style.display = "inline-block";
      messageParagraph.style.wordWrap = "break-word"; // Achieve word wrap
      messageParagraph.innerHTML = text; // Set text in paragraph
      messageElement.appendChild(messageParagraph);
      messagesContainer.appendChild(messageElement);
      //调节对话位置
      let messagesContainerChildren = document.querySelectorAll(
        ".messages-container>div>p"
      );
      let a = document.querySelectorAll(".messages-container>div");
      for (let i = 0; i < a.length; i++) {
        a[i].style.overflow = "hidden";
      }
      if (messagesContainerChildren.length) {
        messagesContainerChildren.forEach((v, k) => {
          v.style.borderRadius = "6px";
          v.style.padding = "15px";
          v.style.marginBottom = "15px";
        });
      }
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      // 用户消息和AI消息的颜色不同
      if (sender == this.senderUser) {
        messageParagraph.style.float = "right";
        messageParagraph.style.background = "#e8f8ff";
        messageElement.style.color = "#000000";
      } else if (sender == this.senderAssistant) {
        messageElement.style.color = "#0a0a0a";
        messageParagraph.style.background = "#eeeeee";
      }
      messageElement.style.fontFamily = "Microsoft YaHei";
      return messageParagraph;
    },
    // 对话模式下, 重置聊天记录
    async resetChatHistory() {
      const apiEndpoint =
        this.baseLLMOpenAIUrl +
        "/chat-completion?username=" +
        this.authUsername;
      await fetch(apiEndpoint, {
        method: "DELETE",
        headers: {
          Authorization: `Basic ${this.encodedCredentials}`,
        },
      });
      this.$refs.inputBox.value = "";
      ElMessage({
        message: '已成功清空记录！',
        duration: 1100,
        type: 'success',
      })
      // 清空已显示的消息
      this.$refs.messagesContainer.innerHTML = "";
    },

    // 对话模式下, 设置情景
    async updateSystemMessage() {
      this.isShowScenarios = !this.isShowScenarios
      // if (this.$refs.inputBox.value == "") {
      //   ElMessage({
      //     message: "设置情景不能为空！",
      //     type: "error",
      //     duration: 1100,
      //     grouping: true,
      //   });
      // } else {
      //   this.chatModeSystemMessage = this.$refs.inputBox.value;
      //   this.$refs.inputBox.value = "";
      //   ElMessage({
      //     message: "成功设置系统消息",
      //     type: "success",
      //     duration: 1100,
      //     grouping: true,
      //   });
      // }
    },
    //获取历史记录
    async loadChatHistory() {
      const requestUrl =
        this.baseUrl + "/llm/openai/chat-completion?username=" + getData('username');
      const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
          Authorization: `Basic ${this.encodedCredentials}`,
        },
      });

      const responseJsonObject = await response.json();
      if (responseJsonObject.messages.slice(-1)[0].role == 'user') {
        console.log("last message user")
        responseJsonObject.messages.pop()
      }
      for (let i = 0; i < responseJsonObject.messages.length; i++) {
        let message = responseJsonObject.messages[i]
        let content = this.achieveLineBreak(message.content)
        if (message.role == 'user') {
          this.createAndAppendMessage(content, this.senderUser)
        } else if (message.role == 'assistant') {
          this.createAndAppendMessage("AI: " + content, this.senderAssistant)
        }
      }
    },
    pageSending() {
      const userMessage = this.$refs.inputBox.value;
      if (!userMessage) {
        return ElMessage({
          message: "请输入内容!",
          type: "warning",
          duration: 800,
          grouping: true,
        });
      }
      this.sendUserMessageAndDisplayResponse()
    },
    // 发送用户消息, 基于不同模式获取AI回复
    async sendUserMessageAndDisplayResponse() {
      const userMessage = this.$refs.inputBox.value;
      this.$refs.inputBox.value = "";
      // 发送按钮失效直到发送完成
      this.$refs.sendButton.classList.add("prohibit");
      const processedText = this.achieveLineBreak(userMessage);
      this.createAndAppendMessage(processedText, this.senderUser);
      // 然后显示AI对话框, 但等待AI的回复
      const botParagraph = this.createAndAppendMessage(
        "AI: ",
        this.senderAssistant
      );
      this.$refs.homeRight.selectMode();
      // 根据不同的模式, 调用不同的函数获取AI回复
      if (this.$store.state.selected.isChatModeSelected) {
        // let { data: res } = await info(this.$store.state.username);
        const chatModeUpdateInfoUrl =
          this.baseLLMOpenAIUrl + "/chat-completion";
        const chatModeSSEUrl =
          this.baseLLMOpenAIUrl + "/chat-completion-stream";
        // isChatModeSelected
        const requestBody = {
          model: this.$store.state.selected.selectedChatModeModel,
          temperature: this.$store.state.selected.selectedChatModeTemperature,
          username: this.authUsername,
          system_message: this.chatModeSystemMessage,
          // this.chatModeSystemMessage
          // 我是一个工地工作者,需要人来帮我,我需要什么样的人
          user_message: userMessage,
        };
        const response = await fetch(chatModeUpdateInfoUrl, {
          method: "PUT",
          headers: {
            Authorization: `Basic ${this.encodedCredentials}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
        if (response.status == 418) {
          ElMessage({
            message: "您的问题含有政治敏感/暴力/色情有关内容!",
            type: "error",
            duration: 3000,
            grouping: true,
          });
          this.$refs.sendButton.classList.remove("prohibit");
          return
        }
        const responseJsonObject = await response.json();
        const apiEndpoint =
          chatModeSSEUrl +
          "?chat_completion_id=" +
          responseJsonObject.id +
          "&test_mode=" +
          this.testMode;
        // console.log("ID", apiEndpoint);
        await this.completionWithStream(apiEndpoint, botParagraph);
      } else if (this.$store.state.selected.isCompletionModeSelected) {
        if (this.$store.state.selected.selectedCompletionModeOnlineOption == "offline") {
          this.$refs.jobRecruitment.recruitment_event();
          this.template_args = [{
            name: this.$route.path == "/chat" ? 'question' : this.$store.state.recruitment.name, value: userMessage
          }]
          const completionModeUpdateInfoUrl =
            this.baseLLMOpenAIUrl + "/completion";
          const completionModeSSEUrl =
            this.baseLLMOpenAIUrl + "/completion-stream";
          const requestBody = {
            model: this.$route.path == "/chat" ? "text-davinci-003" : this.$store.state.recruitment.model,
            temperature: 0,
            username: this.authUsername,
            template_id: this.$route.path == "/chat" ? 0 : this.$store.state.recruitment.template_id,
            template_args: this.template_args
          };
          const response = await fetch(completionModeUpdateInfoUrl, {
            method: "PUT",
            headers: {
              Authorization: `Basic ${this.encodedCredentials}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          });
          if (response.status == 418) {
            ElMessage({
              message: "您的问题含有政治敏感/暴力/色情有关内容!",
              type: "error",
              duration: 3000,
              grouping: true,
            });
            this.$refs.sendButton.classList.remove("prohibit");
            return
          }
          const responseJsonObject = await response.json();
          const apiEndpoint =
            completionModeSSEUrl +
            "?completion_id=" +
            responseJsonObject.id +
            "&test_mode=" +
            this.testMode;
          await this.completionWithStream(apiEndpoint, botParagraph);
        } else if (this.$store.state.selected.selectedCompletionModeOnlineOption == "online") {
          await this.agentSearch(userMessage, botParagraph);
          this.$refs.sendButton.classList.remove("prohibit");
        }
      } else if (this.$store.state.selected.isImagineModeSelected) {
        //图片模式
        await this.imagine(userMessage, botParagraph);
        this.$refs.sendButton.classList.remove("prohibit");
      }
    },

    async completionWithStream(apiEndpoint, botParagraph) {
      const eventSource = new EventSource(apiEndpoint);
      let completeResponse = "";
      let codeStart = false;
      eventSource.onopen = () => {
        console.log("EventSource connection established.");
      };
      eventSource.onerror = (error) => {
        console.log("EventSource error: ", error);
        eventSource.close();
        this.isStopGeneration = false;
        ElMessage({
          message: "请刷新页面或清除记录!",
          type: "error",
          duration: 6000,
          grouping: true,
        });
      };

      //AI持续获取答案，会显到消息容器中
      eventSource.onmessage = (event) => {
        this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight;  //一直让消息容器右侧滚条触底；
        const response = JSON.parse(event.data);
        if (response.hasEnd || this.isStopGeneration) {
          eventSource.close();
          this.isStopGeneration = false;

          this.$refs.sendButton.classList.remove("prohibit");
        } else {
          const formattedChunkResponse = this.achieveLineBreak(
            response.content
          );
          completeResponse += formattedChunkResponse;
          const indexOfTripleBackticks = completeResponse.indexOf("```");
          if (indexOfTripleBackticks > 0) {
            if (codeStart == false) {
              completeResponse = this.replaceSubstringAtIndex(completeResponse, indexOfTripleBackticks, "<pre><code>");
              codeStart = true;
            }
            else {
              completeResponse = this.replaceSubstringAtIndex(completeResponse, indexOfTripleBackticks, "</code></pre>");
              codeStart = false;
            }
          }
          botParagraph.innerHTML = completeResponse;
        }
      };
    },
    replaceSubstringAtIndex(str, index, replacement) {
      return str.substring(0, index) + replacement + str.substring(index + 3);
    },

    //AI联网  搜索
    async agentSearch(userMessage, botParagraph) {
      this.isShowLoading = true;
      const response = await fetch(
        this.baseUrl + "/agent/openai/online-search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: userMessage,
          }),
        }
      );
      if (response.status == 418) {
        ElMessage({
          message: "您的问题含有政治敏感/暴力/色情有关内容!",
          type: "error",
          duration: 3000,
          grouping: true,
        });
        this.isShowLoading = false;
        return
      }
      const { final_answer, intermediate_steps } = await response.json();
      botParagraph.innerHTML += "<br/>" +
        "思考步骤：<br>" +
        this.formatIntermediateSteps(intermediate_steps) +
        "\n" +
        "最终答案：" +
        final_answer +
        "<br>\n";
      this.isShowLoading = false;
    },
    //处理intermediate_steps的多级数组,暂时按照固定格式处理的数据，后续可持续拓展
    formatIntermediateSteps(array) {
      let str = "";
      if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i][0].length; j++) {
              str += array[i][0][j].replace(/\n/g, "<br/>") + "<br/>";
            }
          }
          str += array[0][1] + "<br/>";
        }
      }
      return str;
    },

    //图片生成
    async imagine(userMessage, botParagraph) {
      const requestBody = {
        prompt: userMessage,
        n: this.$store.state.selected.selectedImagineModeImageNum,
        size: this.$store.state.selected.selectedImagineModeImageSize,
      };
      const response = await fetch(this.baseUrl + "/image/openai/generation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const { data } = await response.json();
      botParagraph.innerHTML +=
        "<br/><span>" + this.handleImage(data) + "</span>";
    },
    //将图片链接渲染到页面
    handleImage(data) {
      let htmlStr = "<span>";
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          htmlStr += "<img src=" + data[i].url + ">";
        }
      }
      return htmlStr;
    },
  },
};
</script>
  
<style scoped lang="scss">
.prohibit {
  pointer-events: none;
  opacity: 0.3;
}

.content {
  display: flex;
  width: 1200px;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between;

  .userAccount {
    position: absolute;
    right: 10px;
    top: 82px;
    box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.26);
  }
}

.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.loading img {
  width: 100px;
  object-fit: contain;
  border-radius: 10px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.home-middle-container {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  height: 95%;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 40px;
}

.home-middle-Unchanged {
  width: 1200px;
  transition: width 0.5s;
}

.home-middle-change {
  width: 72.6vw;
  transition: width 0.5s;

  .send-button {
    right: 15%;
    transition: right 0.5s;
  }
}

.messages-container,
.usermsg {
  align-self: flex-start;
  height: 740px;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  border-radius: 40px 40px 0 0;
}

.bottom-button {
  width: 480px;
  margin: 20px auto !important;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  .el-button {
    width: 118px;
    border-radius: 18px;
    height: 36px;
    background: #FFFFFF;
    opacity: 0.5;
    font-size: 14px;
    color: #2F1E67;
    font-weight: 570;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 16px;
      margin-right: 6px;
    }
  }
}

button {
  cursor: pointer;
  outline: none;
}

.button {
  padding: 0;
}

.button-container {
  display: flex;
  flex: 0 0 auto;
  height: fit-content;
  justify-content: flex-end;
  margin-bottom: 20px;
  width: 100%;
  height: 36px;
}

.input-textarea {
  width: 976px;
  height: 50px;
  background: #02001B;
  border: 1px solid #2F1E67;
  resize: none;
  font-size: 15px;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 15px 30px 15px;
  color: rgba(255, 255, 255, 0.5);
  padding-right: 100px;
}

.input-textarea:focus {
  outline: 0px solid;
}

.input-box {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
}

.send-button {
  width: 100px;
  position: absolute;
  right: 10%;
  transition: right 0.5s;
  top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(128, 128, 128, 0);
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  border: 0px;
}

.send-icon {
  width: 14px;
  margin-right: 5px;
  vertical-align: middle;
}

.syan {
  width: 278px;
  height: 314px;
  background: #2F1E67;
  border-radius: 40px 0px 0px 40px;
  margin-left: 92px;
}

.syan :deep(.el-select .el-input__wrapper) {
  border-radius: 31px;
  width: 104px;
  height: 30px;
  background-color: #e8eaed;
  color: #656668;
  box-shadow: 2px 2px 8px 0px;
}

.oldRightSel {
  width: 0;
  height: 0;
  overflow: hidden;
}

select {
  outline: 0;
}

:deep(.el-input__inner) {
  text-align: center;
}

.home-right-container {
  display: flex;
  flex-direction: column;
  background-color: f7f7f7;
}

.chat-mode-container {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
}

.chat-mode-radio {
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}

.chat-mode-titel {
  align-self: center;
  margin-left: var(--dl-space-space-threeunits);
}

.chat-mode-model-container {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
}

.chat-mode-model-titel {
  align-self: center;
  margin-left: 93px;
}

.chat-mode-model-list {
  margin-left: var(--dl-space-space-unit);
}

.chat-mode-temperature-container {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
}

.chat-mode-temperature-titel {
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  margin-left: 93px;
}

.chat-mode-num-list {
  margin-top: var(--dl-space-space-halfunit);
}

.completion-mode-container {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
}

.completion-mode-radio {
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}

.completion-mode-titel {
  align-self: center;
  margin-left: var(--dl-space-space-threeunits);
}

.completion-mode-online-option-container {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
}

.completion-mode-online-option-titel {
  align-self: center;
  margin-left: 93px;
}



.completion-mode-online-option-checkbox {
  align-self: center;
  margin-left: var(--dl-space-space-threeunits);
}

.imagine-mode-container {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
}

.imagine-mode-radio {
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}

.imagine-mode-titel {
  align-self: center;
  margin-left: var(--dl-space-space-threeunits);
}

.imagine-mode-num-container {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
}

.imagine-mode-num-titel {
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  margin-left: 93px;
}

.imagine-mode-num-list {
  margin-top: var(--dl-space-space-halfunit);
}

.imagine-mode-size-container {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
}

.imagine-mode-size-titel {
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  margin-left: 93px;
}

.imagine-mode-size-list {
  margin-top: var(--dl-space-space-halfunit);
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: silver;
  border-radius: 30px;
}

::-webkit-scrollbar-track {
  border-radius: 30px;
}

.userTip {
  width: 450px;
  height: 200px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
}
</style>