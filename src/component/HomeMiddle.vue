<template>
    <div class="home-middle-container">
        <div class="messages-container" ref="messagesContainer">
            <!-- Messages will appear here -->
        </div>
        <div class="button-container">
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
        <textarea placeholder="来说点什么吧…………" class="input-textarea textarea" ref="inputBox"></textarea>
        <button class="send-button button" ref="sendButton">消息发送</button>
    </div>
    <div class="home-right-container">
        <div class="chat-mode-container">
            <input type="radio" id="chat-mode" name="mode" class="chat-mode-radio" checked />
            <span class="chat-mode-titel">对话模式</span>
        </div>
        <div class="chat-mode-model-container">
            <span class="chat-mode-model-titel">AI模型:</span>
            <select class="chat-mode-model-list" v-model="selectedChatModel">
                <!-- 这里的gpt-3.5-turbo和gpt-4用于传入后端api, 不要更改value -->
                <option value="gpt-3.5-turbo" selected>GPT-3.5</option>
                <option value="gpt-4">GPT-4</option>
            </select>
        </div>
        <div class="chat-mode-temperature-container">
            <span class="chat-mode-temperature-titel">AI创造力:</span>
            <select class="chat-mode-num-list" v-model="selectedChatTemperature">
                <!-- 这里的value用于传入后端api, 经过测试0, 0.2和0.6这三个值比较合理 -->
                <option value="0">保守模式</option>
                <option value="0.2" selected>均衡模式</option>
                <option value="0.6">创造模式</option>
            </select>
        </div>
        <div class="completion-mode-container">
            <input type="radio" id="completion-mode" name="mode" class="completion-mode-radio" />
            <span class="completion-mode-titel">问答模式</span>
        </div>
        <div class="completion-mode-online-option-container">
            <span class="completion-mode-online-option-titel">
                <span>联网</span>
                <br />
            </span>
            <input type="checkbox" v-model="isCompletionModeOnline" class="completion-mode-online-option-checkbox" />
        </div>
        <div class="imagine-mode-container">
            <input type="radio" id="imagine-mode" name="mode" class="imagine-mode-radio" />
            <span class="imagine-mode-titel">图片生成</span>
        </div>
        <div class="imagine-mode-num-container">
            <span class="imagine-mode-num-titel">图片数量:</span>
            <select class="imagine-mode-num-list" v-model="selectedImagineImageNum">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <div class="imagine-mode-size-container">
            <span class="imagine-mode-size-titel">图片尺寸:</span>
            <select class="imagine-mode-size-list" v-model="selectedImagineImageSize">
                <option value="256x256">256x256</option>
                <option value="512x512">512x512</option>
                <option value="1024x1024">1024x1024</option>
            </select>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "HomeMiddle",
    data() {
        return {
            // baseUrl: "http://localhost:8080/chamber"
            baseUrl: "https://gpt4fun.azurewebsites.net/chamber",
            // 调用gpt4fun后端API时的认证信息
            authUsername: "demo@bizcamp.com",
            authPassword: "999",
            // 聊天框中展示的名称
            username: "用户: ",
            botName: "AI: ",
            // Html元素的值, 都设有默认值
            isCompletionModeOnline: false,
            selectedChatModel: "gpt-3.5-turbo",
            selectedChatTemperature: "0.2",
            selectedImagineImageNum: "1",
            selectedImagineImageSize: "512x512",
        };
    },
    created() {
        this.credentials = `${this.authUsername}:${this.authPassword}`;
        this.encodedCredentials = btoa(this.credentials);
    },
    mounted() {
        this.$refs.sendButton.addEventListener(
            "click",
            this.sendUserMessageAndDisplayResponse
        );
        this.$refs.resetButton.addEventListener("click", this.resetChatHistory);
        this.$refs.updateButton.addEventListener("click", this.updateSystemMessage);
        document.getElementById("chat-mode").addEventListener("change", this.toggleButtonsVisibility);
        document.getElementById("completion-mode").addEventListener("change", this.toggleButtonsVisibility);
        document.getElementById("imagine-mode").addEventListener("change", this.toggleButtonsVisibility);
    },
    methods: {
        achieveLineBreak(str) {
            return str.replace(/(?:\r\n|\r|\n)/g, "<br>");
        },
        createAndAppendMessage(text, sender) {
            const messagesContainer = this.$refs.messagesContainer;
            const messageElement = document.createElement("div");
            const messageParagraph = document.createElement("p");
            messageParagraph.style.width = "100%"; // Achieve word wrap
            messageParagraph.style.wordWrap = "break-word"; // Achieve word wrap
            const processedText = this.achieveLineBreak(text); // Required anyway
            messageParagraph.innerHTML = processedText; // Set text in paragraph
            messageElement.appendChild(messageParagraph);
            messagesContainer.appendChild(messageElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // 用户消息和AI消息的颜色不同
            if (sender == this.senderUser) {
                messageElement.style.color = "#000000";
            } else if (sender == this.senderAssistant) {
                messageElement.style.color = "#0a0a0a";
            }
            messageElement.style.fontFamily = "Microsoft YaHei";
            return messageParagraph;
        },
        toggleButtonsVisibility() {
            const selectedMode = document.querySelector("input[name=mode]:checked");
            // 只在对话模式下显示这两个按钮
            if (selectedMode.id == "chat-mode") {
                this.$refs.resetButton.style.display = "inline-block";
                this.$refs.updateButton.style.display = "inline-block";
            } else {
                this.$refs.resetButton.style.display = "none";
                this.$refs.updateButton.style.display = "none";
            }
        },

        // 对话模式下, 重置聊天记录
        async resetChatHistory() {
            this.$refs.inputBox.value = "";
            // 清空已显示的消息
            this.$refs.messagesContainer.innerHTML = "";
            const apiEndpoint = this.baseUrl + "/chat-completion/history";
            const response = await fetch(apiEndpoint, {
                method: "DELETE",
                headers: {
                    Authorization: `Basic ${this.encodedCredentials}`,
                },
            });
            const { responseMessage } = await response.json();
            this.createAndAppendMessage(responseMessage, this.senderAssistant);
        },

        // 对话模式下, 设置情景
        async updateSystemMessage() {
            const systemMessage = this.$refs.inputBox.value.trim();
            // Updating an empty system message is not allowed
            if (!systemMessage) return;
            this.$refs.inputBox.value = "";
            const apiEndpoint = this.baseUrl + "/chat-completion/system-message";
            const requestBody = {
                systemMessage: systemMessage,
            };
            const response = await fetch(apiEndpoint, {
                method: "PUT",
                headers: {
                    Authorization: `Basic ${this.encodedCredentials}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            const { responseMessage } = await response.json();
            this.createAndAppendMessage(responseMessage, this.senderAssistant);
        },

        // 发送用户消息, 基于不同模式获取AI回复
        async sendUserMessageAndDisplayResponse() {
            const userMessage = this.$refs.inputBox.value.trim();
            this.$refs.inputBox.value = "";
            if (!userMessage) {
                return;
            }
            // 首先显示用户信息
            const displayedUserMessage = this.username + userMessage;
            this.createAndAppendMessage(displayedUserMessage, this.senderUser);
            // 然后显示AI对话框, 但等待AI的回复
            const botParagraph = this.createAndAppendMessage(
                this.botName,
                this.senderAssistant
            );
            // 根据不同的模式, 调用不同的函数获取AI回复
            const selectedMode = document.querySelector("input[name=mode]:checked");
            if (selectedMode.id == "chat-mode") {
                const chatModeSSEUrl = this.baseUrl + "/chat-completion/stream-messages";
                const model = this.selectedChatModel;
                await this.completionWithStream(userMessage, model, chatModeSSEUrl, botParagraph);
            }
            else if (selectedMode.id == "completion-mode") {
                if (this.isCompletionModeOnline) {
                    await this.agentSearch(userMessage, botParagraph);
                }
                else {
                    const completionModeSSEUrl = this.baseUrl + "/completion/stream-message";
                    const model = "text-davinci-003";
                    await this.completionWithStream(userMessage, model, completionModeSSEUrl, botParagraph);
                }
            }
            else if (selectedMode.id == "imagine-mode") {
                await this.imagine(userMessage, botParagraph);
            }
        },

        async completionWithStream(userMessage, model, sseUrl, botParagraph) {
            // 首先将用户消息和模型名称等发送到后端
            const updateCompletionEndPoint = this.baseUrl + "/completion/message";
            const requestBody = {
                model: model,
                message: userMessage,
                temperature: this.selectedChatTemperature,
            };
            await fetch(updateCompletionEndPoint, {
                method: "PUT",
                headers: {
                    Authorization: `Basic ${this.encodedCredentials}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            // 建立后端sse传输, 对话模式和问答模式的sseUrl不同
            const apiEndpoint = sseUrl + "?username=" + `${this.authUsername}`;
            const eventSource = new EventSource(apiEndpoint);
            eventSource.onopen = () => {
                console.log("EventSource connection established.");
            };
            eventSource.onerror = (error) => {
                console.log("EventSource error: ", error);
                eventSource.close();
            };
            eventSource.onmessage = (event) => {
                const response = JSON.parse(event.data);
                if (response.hasEnd) {
                    eventSource.close();
                } else {
                    const formattedChunkResponse = this.achieveLineBreak(response.content);
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
                    botParagraph.innerHTML += formattedChunkResponse
                }
            };
        },
        replaceSubstringAtIndex(str, index, replacement) {
            return str.substring(0, index) + replacement + str.substring(index + 3);
        },

        //AI联网搜索
        async agentSearch(userMessage, botParagraph) {
            const response = await fetch("https://albatross21.azurewebsites.net/agent-search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "question": userMessage
                })
            })
            const { final_answer, intermediate_steps } = await response.json();
            botParagraph.innerHTML += "思考步骤：<br>" + this.formatIntermediateSteps(intermediate_steps) + "\n" +
                "最终答案：" + final_answer + "<br>\n"
        },
        //处理intermediate_steps的多级数组,暂时按照固定格式处理的数据，后续可持续拓展
        formatIntermediateSteps(array) {
            let str = ""
            if (Array.isArray(array)) {
                for (let i = 0; i < array.length; i++) {
                    if (Array.isArray(array[i])) {
                        for (let j = 0; j < array[i][0].length; j++) {
                            str += array[i][0][j].replace(/\n/g, "<br/>") + "<br/>";
                        }
                    }
                    str += array[0][1] + "<br/>"
                }
            }
            return str
        },

        //图片生成
        async imagine(userMessage, botParagraph) {
            const requestBody = {
                prompt: userMessage,
                n: this.selectedImagineImageNum,
                size: this.selectedImagineImageSize,
            };
            const response = await fetch("https://albatross21.azurewebsites.net/imagine-gpt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            })
            const { data } = await response.json();
            botParagraph.innerHTML += "<br/><span>" + this.handleImage(data) + "</span>"
        },
        //将图片链接渲染到页面
        handleImage(data) {
            let htmlStr = "<span>"
            if (Array.isArray(data)) {
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<img src=" + data[i].url + ">"
                }
            }
            return htmlStr
        },
    },
};
</script>
  
<style scoped>
.home-middle-container {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    height: 90vh;
    justify-content: flex-end;
    width: 900px;
}

.messages-container {
    align-self: flex-start;
    height: 490px;
    margin-left: var(--dl-space-space-halfunit);
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
}

.button-container {
    display: flex;
    flex: 0 0 auto;
    height: fit-content;
    justify-content: flex-end;
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
    width: 99%;
    /* Align items to the right */
}

.update-button {
    align-self: flex-end;
    background-color: rgb(13, 164, 127);
    color: #ffffff;
    margin-right: var(--dl-space-space-halfunit);
}

.delete-button {
    align-self: flex-end;
    background-color: rgb(217, 217, 217);
}

.input-textarea {
    background-color: rgba(217, 217, 217, 0.46);
    height: 100px;
    width: 97%;
}

.send-button {
    align-self: flex-end;
    background-color: rgb(13, 164, 127);
    color: #ffffff;
    margin-top: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
}

.home-right-container {
    width: 100%;
    height: 100%;
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
</style>