<template>
  <div class="messages-container" ref="messagesContainer">
    <!-- Messages will appear here -->
  </div>
  <div class="chat-container">
    <div class="chat-button-container">
      <button class="button-set" ref="updateButton">设置情景</button>
      <button class="button-set" ref="resetButton">重置</button>
    </div>
    <div class="chat-input-container">
      <textarea ref="inputBox"></textarea>
    </div>
  </div>
  <div class="send-button-container">
    <button class="button-send" ref="sendButton">发送</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // baseUrl: 'http://localhost:8080/chamber'
      baseUrl: "https://gpt4fun.azurewebsites.net/chamber",
      // Authentication header
      authUsername: "tester@qiankuniot.com",
      authPassword: "123",
      // The sender parameter in createAndAppendMessage()
      senderUser: "user",
      senderAssistant: "assistant",
      // Display of names
      username: "用户: ",
      botName: "AI: ",
      // Model
      gpt35: "gpt-3.5-turbo",
      gpt4: "gpt-4",
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
  },
  methods: {
    achieveLineBreak(str) {
      return str.replace(/(?:\r\n|\r|\n)/g, "<br>");
    },
    clearAllTextBox() {
      this.$refs.messagesContainer.innerHTML = "";
      this.$refs.inputBox.value = "";
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

      // Add font color and font family to messageElement
      if (sender == this.senderUser) {
        messageElement.style.color = "#ffffff";
      } else if (sender == this.senderAssistant) {
        messageElement.style.color = "#c6ccd6";
      }
      messageElement.style.fontFamily = "Microsoft YaHei";
      return messageParagraph;
    },
    async sendUserMessageAndDisplayResponse() {
      const userMessage = this.$refs.inputBox.value.trim();
      this.$refs.inputBox.value = "";
      if (!userMessage) {
        return;
      }
      const displayedUserMessage = this.username + userMessage;
      this.createAndAppendMessage(displayedUserMessage, this.senderUser);
      await this.chatCompletionWithStream(userMessage);
    },

    async chatCompletionWithoutStream(userMessage) {
      const apiEndpoint = this.baseUrl + "/messages";
      const requestBody = {
        temperature: 0.1,
        userMessage: userMessage,
      };
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          Authorization: `Basic ${this.encodedCredentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const { responseMessage } = await response.json();
      return responseMessage;
    },

    async chatCompletionWithStream(userMessage) {
      const updateCompletionEndPoint = this.baseUrl + "/completion/message";
      const requestBody = {
        model: this.gpt35,
        message: userMessage,
        temperature: 0.1,
      };
      await fetch(updateCompletionEndPoint, {
        method: "PUT",
        headers: {
          Authorization: `Basic ${this.encodedCredentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const messageParagraph = this.createAndAppendMessage(
        this.botName,
        this.senderAssistant
      );
      const apiEndpoint =
        this.baseUrl +
        "/chat-completion/stream-messages?username=" +
        `${this.authUsername}`;
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
          const formattedText = this.achieveLineBreak(response.content);
          messageParagraph.innerHTML += formattedText;
        }
      };
    },

    async resetChatHistory() {
      this.clearAllTextBox();
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

    async updateSystemMessage() {
      const systemMessage = this.$refs.inputBox.value.trim();
      // Updating an empty system message is not allowed
      if (!systemMessage) return;
      this.clearAllTextBox();
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
  },
};
</script>

<style scoped>
.messages-container {
  margin-top: auto;
  width: 100%;
}

.chat-container {
  align-items: end;
  display: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.chat-button-container {
  display: flex-end;
  justify-content: end;
  width: 100%;
}

.chat-input-container {
  display: flex-end;
  justify-content: center;
  width: 100%;
}

.chat-input-container textarea {
  background-color: inherit;
  border: 1px solid white;
  border-radius: 5px;
  color: #ffffff;
  display: flex-end;
  font-size: 16px;
  height: 100px;
  width: 100%;
  padding: 10px;
}

.send-button-container {
  margin-top: 10px;
  display: flex-end;
  justify-content: center;
  width: 100%;
}

/* Button send */
.button-send {
  appearance: none;
  background-color: #225c5b;
  border: 2px solid #225c5b;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 30px;
  min-width: 0;
  outline: none;
  padding: 12px 12px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 25%;
}

.button-send:disabled {
  pointer-events: none;
}

.button-send:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-send:active {
  box-shadow: none;
  transform: translateY(0);
}

/* Button set */
.button-set {
  appearance: none;
  background-color: #343541;
  border: 2px solid #225c5b;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin: 10px;
  min-height: 30px;
  min-width: 0;
  outline: none;
  padding: 8px 8px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 12%;
}

.button-set:disabled {
  pointer-events: none;
}

.button-set:hover {
  background-color: #225c5b;
  transform: translateY(-2px);
}

.button-set:active {
  box-shadow: none;
  transform: translateY(0);
}

/* Scroll bar */
*::-webkit-scrollbar {
  width: 16px;
}

*::-webkit-scrollbar-track {
  background: #343541;
}

*::-webkit-scrollbar-thumb {
  background-color: #565869;
  border-radius: 3px;
  border: 3px solid #565869;
}

/* Scroll bar grabber */
::-webkit-resizer {
  background: #343541;
}
</style>
