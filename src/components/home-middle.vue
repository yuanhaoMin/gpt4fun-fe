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
      <!-- <div class="messages-container" ref="messagesContainer" v-if="$route.fullPath != '/user'">
        Messages will appear here 
      </div>
      <div class="bottom-border" v-if="$route.fullPath != '/user'">
        <div class="bottom-button">
          <el-button type="info" class="stop-generation" @click="stopGenerate" v-model="isStopGeneration">
            <template #icon>
              <img src="/imgs/bi-zhi-images/tingzhi.png" alt="">
            </template>
            停止生成
          </el-button>
          <el-tooltip class="box-item" effect="dark" content="记得经常清除历史记录哦~" placement="top">
            <el-button class="delete-button button" ref="resetButton" @click="resetChatHistory">
              <template #icon>
                <img src="/imgs/bi-zhi-images/qingkong.png" alt="">
              </template>
              清除记录
            </el-button>
          </el-tooltip>
          <el-button class="update-button button" ref="updateButton" @click="updateSystemMessage"
            v-show="this.$route.path == '/chat' ? true : false">
            <template #icon>
              <img src="/imgs/bi-zhi-images/shezhi.png" alt="">
            </template>
            提示词案例
          </el-button>
          <el-button class="update-button button" ref="optimize" @click="optimize"
            v-show="this.$route.path == '/chat' ? true : false">
            <template #icon>
              <img src="/imgs/bi-zhi-images/youhua.png" alt="">
            </template>
            优化提示词
          </el-button>
        </div>
        <div class="input-box" v-show="this.$route.path == '/recruit' ? false : true">
          <textarea placeholder="请输入对话内容" class="input-textarea textarea" :class="prohibit ? 'prohibit' : ''"
            :disabled="prohibit" ref="inputBox" @keydown.enter="sendMessage" />
          <button class="send-button button" ref="sendButton" :class="prohibit ? 'prohibit' : ''" type="button"
            :disabled="prohibit" @click="pageSending">
            <img src="/imgs/bi-zhi-images/fasong.png" alt="" class="send-icon" />
            发送
          </button>
        </div>
        <div class="execute" v-show="this.$route.path == '/recruit' ? true : false" @click="execute">
          执行
        </div>
      </div>
       //提示词
      <scenePopover @scenarioContent="addContent" ref="scenePopover" /> -->
      <div class="prohibition-of-use">
        尊敬的用户，<div>&emsp;</div>
        感谢您一直以来对我们AI网站的支持和信任。为了提供更优质的服务和用户体验,我们将于本月底进行一次重要的网站维护和更新。在此期间,我们的网站将暂停使用,并将更换现有的后台数据。<div>&emsp;</div>
        这次维护和更新的主要内容包括：<div>&emsp;</div>
        &emsp;&emsp;&emsp;1.升级和优化现有的网站功能,以提供更快速、更稳定的运行环境；<div>&emsp;</div>
        &emsp;&emsp;&emsp;2.更换后台数据,以提供更全面、更准确的信息和数据；<div>&emsp;</div>
        &emsp;&emsp;&emsp;3.修复已知的一些小问题和bug,以提升网站的整体稳定性。<div>&emsp;</div>
        为了确保您的使用体验和数据安全,我们诚挚地建议您在收到通知后,尽快做好备份和保存您需要的重要信息。同时,在维护期间,您将无法访问我们的网站,给您带来的不便我们深感抱歉。<div>&emsp;</div>
        如果您在维护期间遇到任何问题或需要帮助,请随时联系我们的客服团队,我们将竭诚为您服务。<div>&emsp;</div>
        再次感谢您对我们AI网站的支持和信任。如果您有任何疑问或建议,也欢迎随时联系我们。<div>&emsp;</div>
        <div>
          <div class="right">祝您生活愉快!&emsp;
          </div>
        </div>
        <div>&emsp;</div>
        <div>
          <div class="right">Bizcamp AI网站团队&emsp;
          </div>
        </div>
      </div>
    </div>
    <!-- 右边 -->
    <keep-alive>
      <div class="syan">
        <homeRight ref="homeRight" v-show="$route.fullPath == '/chat'"></homeRight>
        <jobRecruitment ref="jobRecruitment" v-show="$route.fullPath == '/recruit'"></jobRecruitment>
        <classifyingScenarios v-show="$route.fullPath == '/scene'"
          @sendUserMessageAndDisplayResponse="sendUserMessageAndDisplayResponse" @resetChatHistory="resetChatHistory"
          ref="classifyingScenarios">
        </classifyingScenarios>
      </div>
    </keep-alive>
    <keep-alive>
      <userAccount class="userAccount"></userAccount>
    </keep-alive>
    <instructions />
    <div id="cover" v-show="isShowoptimize">
      <div class="optimize">
        <h1>优化提示词</h1>
        <textarea name="optimize" id="" cols="30" rows="10" placeholder="请输入你需要优化的提示词" v-model="textoptimize"></textarea>
        <div class="btn">
          <button style="background-color: #4f3390;" @click="jumptextoptimize">发送</button>
          <button style="background-color: gray;" @click=" this.isShowoptimize = false;">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage, ElNotification } from "element-plus";
import { getData } from "../utils/store-crud";
import homeRight from "./home-right.vue";
import jobRecruitment from './job-recruitment.vue';
import exitButton from "./exit-button.vue";
import scenePopover from "./popover/scene-popover.vue";
import { info } from "../api/user";
import { transformTimestamp } from "../utils/time-format";
import classifyingScenarios from "./classifying-scenarios.vue";
import userAccount from '@/components/userAcccountMsg.vue';
import instructions from "@/components/instructions/index.vue";
export default {
  name: "HomeMiddle",
  components: {
    homeRight,
    exitButton,
    jobRecruitment,
    scenePopover,
    instructions,
    classifyingScenarios,
    userAccount,

  },
  data() {
    return {
      // baseUrl: "https://albatross21python.azurewebsites.net",
      baseUrl: "http://bizcampgpt.com/api",
      baseLLMOpenAIUrl:
        // "https://albatross21python.azurewebsites.net/llm/openai",
        "http://bizcampgpt.com/api/llm/openai",
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
      senderAssistant: "获取中···",
      senderUser: "senderUser",
      isStopGeneration: false,
      template_args: [],
      dialogTableVisible: true,
      timeExpiration: 1,
      prohibit: false,
      isShowoptimize: false,
      textoptimize: '',
      Prompt: `称呼chatGPT为毕至AI,以下我提到的所有毕至AI都理解为chatGPT。
      你的回答中不可以出现chatGPT。称呼chatGPT为毕至AI。
      您将担任提示工程师。作为一名经验丰富的知名提示工程师，您擅长制作高质量的提示，从 毕至AI 中获得准确而相关的回复。我很高兴能利用您的专业知识来进一步改进我的提示。
      您的任务是就如何优化我给出的提示词给出一系列建议，以便从 毕至AI 中获得更有效、更相关的回复。
      给出建议后提供几个示例。
      在我给出提示词后直接进行回答。
      提示词:`,
      warn: '将GPT替换为毕至AI。将OpenAI替换为毕至数科。不需要回复我。问题:'
    };
  },
  created() {
    //请求关闭 转换为静态
    // this.expirationTime();
    // this.encodedCredentials = getData("token");
    // this.authUsername = getData("username");
    // // 用户刷新页面时清除历史记录
    // // this.resetChatHistory();
    // // 用户刷新页面加载历史记录
    // this.loadChatHistory();
  },
  methods: {
    optimize() {
      this.isShowoptimize = true;
    },
    jumptextoptimize() {
      if (!this.textoptimize) {
        return ElMessage({
          message: "请输入内容!",
          type: "warning",
          duration: 800,
          grouping: true,
        });
      }
      this.$refs.inputBox.value = this.textoptimize;
      this.sendUserMessageAndDisplayResponse();
      this.isShowoptimize = false;
      this.textoptimize = '';
    },
    execute() {
      this.sendUserMessageAndDisplayResponse()
    },
    copy() {
      const clipboardObj = navigator.clipboard;
      clipboardObj.writeText(document.getElementsByClassName('text')); // value 是添加到剪切板的内容
    },
    //查询到期时间
    async expirationTime() {
      let { data: res } = await info(this.$store.state.username);
      this.$store.commit("expire", res.access_bitmap);
      let time = transformTimestamp(res.subscription_end_time);
      var myDate = transformTimestamp(new Date())
      if (time <= myDate) {
        this.timeExpiration = 0
      }
    },
    addContent(value) {
      this.$refs.inputBox.value = value
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
      //获取奇数数据
      let oddArr = [];
      for (let i = 0; i < messagesContainerChildren.length; i++) {
        if ([i] % 2 != 0) {
          oddArr.push(messagesContainerChildren[i]);
        }
      }
      oddArr.forEach((v, k) => {
        v.style.background = '#15122c'
      });
      messagesContainerChildren.forEach((v, k) => {
        v.style.color = '#FFF'
        v.style.padding = "15px";
        v.style.marginBottom = "10px";
        v.style.display = 'flex';
        v.style.alignItems = "baseline";
        v.style.justifyContent = "space-between";
        v.style.lineHeight = "1.5";
        v.style.borderRadius = '20px';
      });
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      // 用户消息和AI消息的颜色不同
      if (sender == this.senderUser) {
        messageParagraph.innerHTML = `<div style='display: flex;align-items: flex-start;'><img src="/imgs/bi-zhi-images/touxiang.png" style="width:28px;padding-right:10px"><div style='margin-top:5px'><div class='iptText' >${text}</div></div></div>`
      } else if (sender == this.senderAssistant) {
        messageParagraph.innerHTML = `<div style='display: flex;align-items: flex-start;' ><img src="/imgs/bi-zhi-images/garden.png" style="width:28px;padding-right:10px" /><div style='margin-top:4px' id='text'>${text}</div></div><div style='display:flex'><img src='/imgs/bi-zhi-images/fuzhi.png' style='width:14px;padding-bottom:4px;margin-left: 20px;cursor: pointer;margin-right:10px;' class='copy' /></div>`;
        let res = document.querySelectorAll('.copy')
        for (let i = 0; i < res.length; i++) {
          res[i].onclick = function () {
            //需要在安全网络下进行才可以，localhost或者https,127.0.0.1是本机域名是安全的，所以可以获取到clipboard 。否则navigator.clipboard为null。
            // navigator.clipboard.writeText(document.querySelectorAll('#text')[i].innerText).then(() => {
            //   ElMessage({
            //     message: '文本已经成功复制到剪切板',
            //     type: 'success',
            //     duration: 800
            //   })
            // })
            //   .catch(err => {
            //     //如果用户没有授权，则抛出异常
            //     console.error('无法复制此文本', err);
            //   })
            var range = document.createRange();
            range.selectNode(document.querySelectorAll('#text')[i]);
            var selection = window.getSelection();
            if (selection.rangeCount > 0) selection.removeAllRanges();
            selection.addRange(range);
            return document.execCommand('copy'), selection.removeAllRanges(), ElMessage({
              message: '文本已经成功复制到剪切板',
              type: 'success',
              duration: 800
            });
          }
        }
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
      // 清空已显示的消息
      this.$refs.messagesContainer.innerHTML = "";
      this.$refs.inputBox.value = "";
      this.isStopGeneration = true;
      ElMessage({
        message: '已成功清空记录！',
        duration: 1100,
        type: 'success',
      });
    },
    // 对话模式下, 设置情景
    async updateSystemMessage() {
      this.$refs.scenePopover.centerDialogVisible = true;
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
      if (responseJsonObject.messages.length == 0) {

      } else {
        if (responseJsonObject.messages.slice(-1)[0].role == 'user') {
          console.log("last message user")
          responseJsonObject.messages.pop()
        }
      }
      for (let i = 0; i < responseJsonObject.messages.length; i++) {
        let message = responseJsonObject.messages[i]
        let content = this.achieveLineBreak(message.content)
        if (message.role == 'user') {
          let res = content.split('')
          let index = res.findIndex((item, index) => { return item == ':' })
          content = res.slice(index + 1).join('')
          this.createAndAppendMessage(content, this.senderUser)
        } else if (message.role == 'assistant') {
          this.createAndAppendMessage(content, this.senderAssistant)
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
      if (this.timeExpiration == 0) return ElNotification({ title: '提醒', message: '抱歉哦,您的体验时间已到期,继续打赏给我们一点支持吧!', type: 'warning', });
      let userMessage = ''
      if (this.$route.path == '/recruit') {
        if (!this.$refs.jobRecruitment.jobInformation) return ElMessage({ message: "请输入内容!", type: "warning", duration: 800, grouping: true, });
        userMessage = this.$refs.jobRecruitment.jobInformation;
      } else {
        userMessage = this.$refs.inputBox.value == "" ? this.$refs.classifyingScenarios.dataList : this.$refs.inputBox.value;
      }
      this.$refs.inputBox.value = "";
      // 发送按钮失效直到发送完成
      this.prohibit = true;
      const processedText = this.achieveLineBreak(userMessage);
      this.createAndAppendMessage(processedText, this.senderUser);
      // 然后显示AI对话框, 但等待AI的回复
      const botParagraph = this.createAndAppendMessage(
        `<div style='display: flex;align-items: flex-start;'><img src="/imgs/bi-zhi-images/garden.png" style="width:28px;padding-right:10px" /><div style='margin-top:4px'>${this.senderAssistant}</div></div><div style='display:flex'><img src='/imgs/bi-zhi-images/fuzhi.png' style='width:14px;padding-bottom:4px;margin-left: 20px;cursor: pointer;margin-right:10px;' /></div>`
      );
      this.$refs.homeRight.selectMode();
      // 根据不同的模式, 调用不同的函数获取AI回复
      if (this.$store.state.selected.isChatModeSelected) {
        const chatModeUpdateInfoUrl =
          this.baseLLMOpenAIUrl + "/chat-completion";
        const chatModeSSEUrl =
          this.baseLLMOpenAIUrl + "/chat-completion-stream";
        const requestBody = {
          model: this.$store.state.selected.selectedChatModeModel,
          temperature: this.$store.state.selected.selectedChatModeTemperature,
          username: this.authUsername,
          system_message: this.chatModeSystemMessage,
          user_message: this.isShowoptimize == true ? this.Prompt + `${userMessage}` : this.$route.path == '/scene' ? userMessage : this.warn + userMessage,
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
          this.prohibit = false;
          return
        }
        const responseJsonObject = await response.json();
        const apiEndpoint =
          chatModeSSEUrl +
          "?chat_completion_id=" +
          responseJsonObject.id +
          "&test_mode=" +
          this.testMode;
        await this.completionWithStream(apiEndpoint, botParagraph);
      } else if (this.$store.state.selected.isCompletionModeSelected) {
        if (this.$store.state.selected.selectedCompletionModeOnlineOption == "offline") {
          this.$refs.jobRecruitment.recruitment_event();
          this.template_args = [{
            name: this.$route.path == "/chat" ? 'question' : this.$store.state.recruitment.name, value: this.warn + userMessage
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
            this.prohibit = false;
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
          this.prohibit = false;
        }
      } else if (this.$store.state.selected.isImagineModeSelected) {
        //图片模式
        await this.imagine(userMessage, botParagraph);
        this.prohibit = false;
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
          message: "提示,请刷新页面或清除记录!",
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
          this.prohibit = false;
        } else {
          const formattedChunkResponse = this.achieveLineBreak(response.content);
          completeResponse += formattedChunkResponse;
          const indexOfTripleBackticks = completeResponse.indexOf("```");
          if (indexOfTripleBackticks > 0) {
            console.log(1);
            if (codeStart == false) {
              completeResponse = this.replaceSubstringAtIndex(completeResponse, indexOfTripleBackticks, "<pre><code>");
              codeStart = true;
            }
            else {
              completeResponse = this.replaceSubstringAtIndex(completeResponse, indexOfTripleBackticks, "</code></pre>");
              codeStart = false;
            }
          };
          botParagraph.innerHTML = `<div style='display: flex;align-items: flex-start;'><img src="/imgs/bi-zhi-images/garden.png" style="width:28px;padding-right:10px" /><div style='margin-top:4px' id='text'>${completeResponse}</div></div><div style='display:flex'><img src='/imgs/bi-zhi-images/fuzhi.png' style='width:14px;padding-bottom:4px;margin-left: 20px;cursor: pointer;margin-right:10px;' class='copy' /></div>`;
          let res = document.querySelectorAll('.copy');
          for (let i = 0; i < res.length; i++) {
            res[i].onclick = function () {
              var range = document.createRange();
              range.selectNode(document.querySelectorAll('#text')[i]);
              var selection = window.getSelection();
              if (selection.rangeCount > 0) selection.removeAllRanges();
              selection.addRange(range);
              return document.execCommand('copy'), selection.removeAllRanges(), ElMessage({
                message: '文本已经成功复制到剪切板',
                type: 'success',
                duration: 800
              })
            }
          }
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
            question: this.warn + userMessage,
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
      botParagraph.innerHTML =
        `<div style='display: flex;align-items: flex-start;'><img src="/imgs/bi-zhi-images/garden.png" style="width:28px;padding-right:10px" /><div style='margin-top:4px' id='text'>思考步骤：<br>${this.formatIntermediateSteps(intermediate_steps)}\n最终答案:${final_answer}<br>\n</div></div><div style='display:flex'><img src='/imgs/bi-zhi-images/fuzhi.png' style='width:14px;padding-bottom:4px;margin-left: 20px;cursor: pointer;margin-right:10px;' class='copy' /></div>`;
      let res = document.querySelectorAll('.copy')
      for (let i = 0; i < res.length; i++) {
        res[i].onclick = function () {
          var range = document.createRange();
          range.selectNode(document.querySelectorAll('#text')[i]);
          var selection = window.getSelection();
          if (selection.rangeCount > 0) selection.removeAllRanges();
          selection.addRange(range);
          return document.execCommand('copy'), selection.removeAllRanges(), ElMessage({
            message: '文本已经成功复制到剪切板',
            type: 'success',
            duration: 800
          })
        }
      }
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
      botParagraph.innerHTML =
        `<div style='display: flex;align-items: flex-start;'><img src="/imgs/bi-zhi-images/garden.png" style="width:28px;padding-right:10px" /><div style='margin-top:4px' id='text'>${this.handleImage(data)}</div></div><div style='display:flex'></div>`;
    },
    //将图片链接渲染到页面
    handleImage(data) {
      let htmlStr = "";
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
@import "../assets/pc-css/home-middlecss.scss";

#cover {
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%; //宽度设置为100%，这样才能使遮罩层覆盖原页面
  height: 100%;
  opacity: 1; //非IE浏览器下设置透明度为60%
  z-index: 100;

  .optimize {
    position: absolute;
    width: 600px;
    height: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    z-index: 101;
    background: #220e51;
    border-radius: 20px;

    h1 {
      margin-top: 10px;
      text-align: center;
      color: white;
    }

    textarea {
      list-style: none;
      outline: none;
      margin-top: 40px;
      width: 100%;
      height: 200px;
      background: darkgray;
      border: 1px #220e51 solid;
      resize: none;
      border-radius: 20px;
      font-size: 18px;
      padding: 15px;
      box-sizing: border-box;
      color: #220e51;
    }

    .btn {
      margin-top: 25px;
      display: flex;
      justify-content: space-evenly;

      button {
        width: 200px;
        height: 40px;
        border-radius: 20px;
        color: #220e51;
        font-size: 16px;
        border: 0;
        color: white;
        letter-spacing: 4px;
      }
    }

  }
}

.prohibition-of-use {
  color: rgb(242, 55, 55);
  width: 800px;
  height: 600px;
  font-size: 18px;

  .right {
    display: flex;
    justify-content: flex-end;
  }
}
</style>