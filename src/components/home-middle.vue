<template>
  <div class="content">
    <!-- loading -->
    <div class="loading" v-show="isShowLoading">
      <img src="/img/loading.gif" alt="" />
    </div>

    <!-- 左边 -->
    <div class="home-middle-container">
      <!-- 消息容器div -->
      <div class="messages-container" ref="messagesContainer">
        <!-- Messages will appear here -->
        <el-button
          type="info"
          class="cease"
          v-show="isShowcease"
          @click="stopSending"
          v-model="cease"
          ><el-icon><SwitchButton /></el-icon
        ></el-button>
      </div>
      <div class="button-container" v-show="isShowChatModeButtons">
        <button class="update-button button" ref="updateButton">
          <span>
            <span>设置情景</span>
            <br />
          </span>
        </button>
        <button class="delete-button button" ref="resetButton">
          <span>
            <span>清除记录</span>
            <br />
          </span>
        </button>
      </div>
      <div class="messagebox">
        <textarea
          placeholder="你想和我聊点什么？(按 Shift+Enter 键可换行)"
          class="input-textarea textarea"
          ref="inputBox"
          @keydown.enter="sendmsg"
        ></textarea>
        <button class="send-button button" ref="sendButton" type="button">
          <img src="img/sendingImg.png" alt="" class="SendIcon" />
        </button>
      </div>
    </div>

    <!-- 旧的 右边 TODO: 删除 -->
    <div class="oldRightSel">
      <div class="home-right-container">
        <div class="chat-mode-container">
          <input
            type="radio"
            id="chat-mode"
            name="mode"
            class="chat-mode-radio"
            checked
          />

          <span class="chat-mode-titel">对话模式</span>
        </div>
        <div class="chat-mode-model-container">
          <span class="chat-mode-model-titel">AI模型:</span>
          <select class="chat-mode-model-list" v-model="selectedChatModeModel">
            <!-- 这里的gpt-3.5-turbo和gpt-4用于传入后端api, 不要更改value -->
            <option value="gpt-3.5-turbo" selected>GPT-3.5</option>
            <option value="gpt-4">GPT-4</option>
          </select>
        </div>
        <div class="chat-mode-temperature-container">
          <span class="chat-mode-temperature-titel">AI创造力:</span>
          <select
            class="chat-mode-num-list"
            v-model="selectedChatModeTemperature"
          >
            <!-- 这里的value用于传入后端api, 经过测试0, 0.2和0.6这三个值比较合理 -->
            <option value="0">保守模式</option>
            <option value="0.2" selected>均衡模式</option>
            <option value="0.6">创造模式</option>
          </select>
        </div>
        <div class="completion-mode-container">
          <input
            type="radio"
            id="completion-mode"
            name="mode"
            class="completion-mode-radio"
          />
          <span class="completion-mode-titel">问答模式</span>
        </div>
        <div class="completion-mode-online-option-container">
          <span class="completion-mode-online-option-titel">
            <span>联网</span>
            <br />
          </span>
          <input
            type="checkbox"
            v-model="isCompletionModeOnline"
            class="completion-mode-online-option-checkbox"
          />
        </div>
        <div class="imagine-mode-container">
          <input
            type="radio"
            id="imagine-mode"
            name="mode"
            class="imagine-mode-radio"
          />
          <span class="imagine-mode-titel">图片生成</span>
        </div>
        <div class="imagine-mode-num-container">
          <span class="imagine-mode-num-titel">图片数量:</span>
          <select
            class="imagine-mode-num-list"
            v-model="selectedImagineModeImageNum"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="imagine-mode-size-container">
          <span class="imagine-mode-size-titel">图片尺寸:</span>
          <select
            class="imagine-mode-size-list"
            v-model="selectedImagineModeImageSize"
          >
            <option value="256x256">256x256</option>
            <option value="512x512">512x512</option>
            <option value="1024x1024">1024x1024</option>
          </select>
        </div>
      </div>
    </div>

    <!-- 按钮新样式 -->
    <div class="syan">
      <div class="tall">
        <div>
          <div @click="dialogue">
            <el-button type="primary" class="finger-hover-button"
              >对话模式</el-button
            >&emsp;&emsp;
            <el-switch v-model="isChatModeSelected" size="large" />
          </div>
          <br />
          <div v-show="isShowChatMode">
            <div>
              AI模型: &emsp;<el-select
                placeholder="AI模型"
                v-model="selectedChatModeModel"
              >
                <el-option label="ChatGpt3.5" value="gpt-3.5-turbo" />
                <el-option label="ChatGpt4" value="gpt-4" />
              </el-select>
            </div>
            <br />
            <div>
              AI创造力:
              <el-select
                placeholder="AI创造力"
                v-model="selectedChatModeTemperature"
              >
                <el-option label="保守模式" value="0" />
                <el-option label="均衡模式" value="0.2" />
                <el-option label="创造模式" value="0.6" />
              </el-select>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="unify">
        <div @click="answer">
          <el-button type="primary" class="finger-hover-button"
            >问答模式</el-button
          >&emsp;&emsp;
          <el-switch v-model="isCompletionModeSelected" size="large" />
        </div>
        <br />
        <div v-show="isShowCompletionMode">
          是否联网：<el-select placeholder="是否联网" v-model="isOnline">
            <el-option label="联网" value="online" />
            <el-option label="离线" value="offline" />
          </el-select>
        </div>
      </div>
      <br />
      <div class="unify">
        <div @click="picture">
          <el-button type="primary" class="finger-hover-button"
            >图片生成</el-button
          >&emsp;&emsp;
          <el-switch v-model="isImagineModeSelected" size="large" />
        </div>
        <br />
        <div v-show="isShowImagineMode">
          <div>
            图片数量：<el-select
              placeholder="图片数量"
              v-model="selectedImagineModeImageNum"
            >
              <el-option label="1" value="1" />
              <el-option label="2" value="2" />
              <el-option label="3" value="3" />
            </el-select>
          </div>
          <br />
          <div>
            图片尺寸：<el-select
              placeholder="图片尺寸"
              v-model="selectedImagineModeImageSize"
            >
              <el-option label="256x256" value="256x256" />
              <el-option label="516x516" value="512x512" />
              <el-option label="1024x1024" value="1024x1024" />
            </el-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ElMessage } from "element-plus";
import { getToken } from "../utils/store";

export default {
  name: "HomeMiddle",
  data() {
    return {
      baseUrl: "https://albatross21python.azurewebsites.net",
      baseLLMOpenAIUrl:
        "https://albatross21python.azurewebsites.net/llm/openai",
      // 调用后端API时的认证信息
      // TODO
      authUsername: "",
      // 聊天框中展示的名称
      // TODO
      botName: "AI: ",
      // 聊天模式下的情景文本
      chatModeSystemMessage: "",
      // 测试模式
      testMode: true,
      //默认显示
      isshowshow: true,
      // Html元素的值, 都设有默认值
      isCompletionModeOnline: false,
      selectedChatModeModel: "gpt-3.5-turbo",
      selectedChatModeTemperature: "0.2",
      selectedImagineModeImageNum: "1",
      selectedImagineModeImageSize: "512x512",
      isShowLoading: false,
      senderAssistant: "0",
      senderUser: "1",
      isOnline: "offline", //默认不联网
      isShowChatModeButtons: true, //是否隐藏设置情景和清除记录button
      isChatModeSelected: true, //对话
      isCompletionModeSelected: false, //问答
      isImagineModeSelected: false, //图片
      isShowChatMode: true,
      isShowCompletionMode: false,
      isShowImagineMode: false,
      isShowcease: false,
      cease: true,
    };
  },
  created() {
    this.encodedCredentials = getToken("token");
    this.authUsername = getToken("username");
  },
  mounted() {
    this.$refs.sendButton.addEventListener(
      "click",
      this.sendUserMessageAndDisplayResponse
    );
    this.$refs.resetButton.addEventListener("click", this.resetChatHistory);
    this.$refs.updateButton.addEventListener("click", this.updateSystemMessage);
    document
      .getElementById("chat-mode")
      .addEventListener("change", this.toggleButtonsVisibility);
    document
      .getElementById("completion-mode")
      .addEventListener("change", this.toggleButtonsVisibility);
    document
      .getElementById("imagine-mode")
      .addEventListener("change", this.toggleButtonsVisibility);
  },
  methods: {
    stopSending() {
      this.isShowcease = false;
      this.cease = false;
      this.sendUserMessageAndDisplayResponse();
    },
    dialogue() {
      this.isChatModeSelected = true;
      this.isCompletionModeSelected = false;
      this.isImagineModeSelected = false;
      this.isShowChatModeButtons = true;
      this.isShowChatMode = true;
      this.isShowCompletionMode = false;
      this.isShowImagineMode = false;
    },
    answer() {
      this.isCompletionModeSelected = true;
      this.isChatModeSelected = false;
      this.isImagineModeSelected = false;
      this.isShowChatModeButtons = false;
      this.isShowChatMode = false;
      this.isShowCompletionMode = true;
      this.isShowImagineMode = false;
    },
    picture() {
      this.isImagineModeSelected = true;
      this.isChatModeSelected = false;
      this.isCompletionModeSelected = false;
      this.isShowChatModeButtons = false;
      this.isShowChatMode = false;
      this.isShowCompletionMode = false;
      this.isShowImagineMode = true;
    },
    sendmsg(e) {
      if (!e.shiftKey && e.keyCode == 13) {
        e.cancelBubble = true; //ie阻止冒泡行为
        e.stopPropagation(); //Firefox阻止冒泡行为
        e.preventDefault(); //取消事件的默认动作*换行
        if (this.$refs.inputBox.value == "") return;
        //以下处理发送消息代码
        this.isShowcease = true;
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
      const processedText = this.achieveLineBreak(text); // Required anyway
      messageParagraph.innerHTML = processedText; // Set text in paragraph
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
      ElMessage({
        message: "已重置聊天",
        type: "info",
        duration: 1100,
        grouping: true,
      });
      this.$refs.inputBox.value = "";
      // 清空已显示的消息
      this.$refs.messagesContainer.innerHTML = "";
    },

    // 对话模式下, 设置情景
    async updateSystemMessage() {
      if (this.$refs.inputBox.value == "") {
        ElMessage({
          message: "设置情景不能为空！",
          type: "error",
          duration: 1100,
          grouping: true,
        });
      } else {
        this.chatModeSystemMessage = this.$refs.inputBox.value;
        this.$refs.inputBox.value = "";
        ElMessage({
          message: "成功设置系统消息",
          type: "success",
          duration: 1100,
          grouping: true,
        });
      }
    },

    // 发送用户消息, 基于不同模式获取AI回复
    async sendUserMessageAndDisplayResponse() {
      let clss = document.getElementsByClassName("send-button")[0];
      clss.classList.add("prohibit");
      const userMessage = this.$refs.inputBox.value.trim();
      this.$refs.inputBox.value = "";
      if (this.cease == false) return;
      if (!userMessage) {
        return ElMessage({
          message: "请输入内容!",
          type: "warning",
          duration: 800,
          grouping: true,
        });
      }
      this.createAndAppendMessage(userMessage, this.senderUser);
      // 然后显示AI对话框, 但等待AI的回复
      const botParagraph = this.createAndAppendMessage(
        this.botName,
        this.senderAssistant
      );

      // 根据不同的模式, 调用不同的函数获取AI回复
      if (this.isChatModeSelected) {
        const chatModeUpdateInfoUrl =
          this.baseLLMOpenAIUrl + "/chat-completion";
        const chatModeSSEUrl =
          this.baseLLMOpenAIUrl + "/chat-completion-stream";
        // 首先将用户消息和模型名称等发送到后端
        const requestBody = {
          model: this.selectedChatModeModel,
          temperature: this.selectedChatModeTemperature,
          username: this.authUsername,
          system_message: this.chatModeSystemMessage,
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
        const responseJsonObject = await response.json();
        const apiEndpoint =
          chatModeSSEUrl +
          "?chat_completion_id=" +
          responseJsonObject.id +
          "&test_mode=" +
          this.testMode;
        await this.completionWithStream(apiEndpoint, botParagraph);
      } else if (this.isCompletionModeSelected) {
        if (this.isOnline == "offline") {
          const completionModeUpdateInfoUrl =
            this.baseLLMOpenAIUrl + "/completion";
          const completionModeSSEUrl =
            this.baseLLMOpenAIUrl + "/completion-stream";
          const requestBody = {
            model: "text-davinci-003",
            temperature: 0,
            username: this.authUsername,
            prompt: userMessage,
          };
          const response = await fetch(completionModeUpdateInfoUrl, {
            method: "PUT",
            headers: {
              Authorization: `Basic ${this.encodedCredentials}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          });
          const responseJsonObject = await response.json();
          const apiEndpoint =
            completionModeSSEUrl +
            "?completion_id=" +
            responseJsonObject.id +
            "&test_mode=" +
            this.testMode;
          await this.completionWithStream(apiEndpoint, botParagraph);
        } else if (this.isOnline == "online") {
          await this.agentSearch(userMessage, botParagraph);
        }
      } else if (this.isImagineModeSelected) {
        //图片模式
        await this.imagine(userMessage, botParagraph);
      }
    },

    async completionWithStream(apiEndpoint, botParagraph) {
      const eventSource = new EventSource(apiEndpoint);
      eventSource.onopen = () => {
        console.log("EventSource connection established.");
      };
      eventSource.onerror = (error) => {
        console.log("EventSource error: ", error);
        eventSource.close();
        ElMessage({
          message: "请刷新页面！",
          type: "error",
          duration: 3000,
          grouping: true,
        });
      };
      eventSource.onmessage = (event) => {
        const response = JSON.parse(event.data);
        if (this.cease == false) {
          eventSource.close();
          this.cease = true;
        } else {
          if (response.hasEnd) {
            eventSource.close();
            this.isShowcease = false;
            let clss = document.getElementsByClassName("send-button")[0];
            clss.classList.remove("prohibit");
          } else {
            const formattedChunkResponse = this.achieveLineBreak(
              response.content
            );
            // 代码渲染效果视觉不理想, 需要借助一些外部库
            // completeResponse += formattedChunkResponse;
            // const indexOfTripleBackticks = completeResponse.indexOf("```");
            // if (indexOfTripleBackticks > 0) {
            //     if (codeStart == false) {
            //         completeResponse = this.replaceSubstringAtIndex(completeResponse, indexOfTripleBackticks, "<pre><code>");
            //         codeStart = true;
            //     }
            //     else {
            //         completeResponse = this.replaceSubstringAtIndex(completeResponse, indexOfTripleBackticks, "</code></pre>");
            //         codeStart = false;
            //     }
            // }
            // botParagraph.innerHTML = this.botName + completeResponse;
            botParagraph.innerHTML += formattedChunkResponse; //AI输出内容
          }
        }
      };
    },
    replaceSubstringAtIndex(str, index, replacement) {
      return str.substring(0, index) + replacement + str.substring(index + 3);
    },

    //AI联网  搜索
    async agentSearch(userMessage, botParagraph) {
      this.isShowcease = false;
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
      const { final_answer, intermediate_steps } = await response.json();

      botParagraph.innerHTML +=
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
        n: this.selectedImagineModeImageNum,
        size: this.selectedImagineModeImageSize,
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
  
<style scoped>
.cease {
  width: 120px;
  height: 40px;
  position: fixed;
  bottom: 17%;
  right: 47%;
}
.prohibit {
  opacity: 0.5;
  pointer-events: none;
}
.SendIcon {
  width: 22px;
}
.messagebox {
  display: flex;
  justify-content: space-between;
}
.tall {
  text-align: center;
  margin: 52px 5px 25px;
}

.unify {
  text-align: center;
  margin: 5px;
}

.oldRightSel {
  width: 0;
  height: 0;
  overflow: hidden;
}

.syan {
  width: 100%;
}

.syan :deep(.el-select .el-input__wrapper) {
  border-radius: 31px;
  width: 100px;
  height: 37px;
  background-color: #e8eaed;
  color: #656668;
  box-shadow: 2px 2px 8px 0px;
}

select {
  outline: 0;
}

.finger-hover-button:hover {
  background: white;
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

button {
  cursor: pointer;
  border: 0px;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 20px 0 75px;
  box-sizing: border-box;
}

.home-middle-container {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  height: 90%;
  width: 80%;
}
:deep(.el-input__inner) {
  text-align: center;
}
.messages-container {
  align-self: flex-start;
  height: 88%;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-shadow: 0px 0px 3px 3px rgba(217, 217, 217, 0.46);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 50px 0px 20px 0px;
}

.button-container {
  display: flex;
  flex: 0 0 auto;
  height: fit-content;
  justify-content: flex-end;
  margin-bottom: 20px;
  width: 100%;
  height: 36px;
  /* Align items to the right */
}

.update-button {
  align-self: flex-end;
  background-color: #519bff;
  color: #ffffff;
  margin-right: var(--dl-space-space-halfunit);
}

.delete-button {
  align-self: flex-end;
  background-color: rgb(217, 217, 217);
}

.input-textarea {
  height: 40px;
  width: 95%;
  resize: none;
  font-size: 19px;
  box-sizing: border-box;
  border: 0px;
  color: var(--el-input-text-color, var(--el-text-color-regular));
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    inset;
}

.input-textarea:focus {
  outline: 2px #519bff solid;
}

.send-button {
  align-self: flex-end;
  background-color: #519bff;
  color: #ffffff;
}

.home-right-container {
  width: 23%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: f7f7f7;
}

.finger-hover-button {
  border-radius: 41px;
  width: 57%;
  height: 40px;
  background-color: #eff0f2;
  color: #656668;
  box-shadow: 2px 2px 8px 0px;
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
</style>