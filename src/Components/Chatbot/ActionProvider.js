class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello, Welcome to student info system!");
    this.addMessageToState(message);
  };

 handleGotIt = () => {
  const message = this.createChatBotMessage("Got it!", {
    widget: "user",
    withAvatar: true,
    delay: 200,
  });

  // Set the user property of the message to true
  message.user = true;

  this.addMessageToState(message);
};


  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
