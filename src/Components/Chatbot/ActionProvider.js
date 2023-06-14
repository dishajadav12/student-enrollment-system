class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.timer = null; // Timer reference
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello, Welcome to the student info system!");
    this.addMessageToState(message);
  };
  handleGotIt = () => {
    const message = this.createChatBotMessage("Got it!");
    message.user = true; // Set user property to true
    this.addMessageToState(message);
    this.askForHelp();
  };

  askForHelp = () => {
    const message = this.createChatBotMessage(
      "what is your name?", {
        widget: "Name",
      }
    );
    this.addMessageToState(message);
  };
  handleName = () => {
    const message = this.createChatBotMessage("hiii!", );
    message.user = true; // Set user property to true
    this.addMessageToState(message);
    this.askAge();

  }
  askAge = () => {
    const message = this.createChatBotMessage("Select your Age:", {
      widget: "AgeQuestion",
    });
    message.user = true;
    this.addMessageToState(message);
  };

  handleAge = () => {
    const message = this.createChatBotMessage("Thank you. Bot will exit in 5 seconds.");
    this.addMessageToState(message);

    // Start the countdown timer
    this.timer = setTimeout(() => {
      this.exitBot();
    }, 5000);
  };

  exitBot = () => {
    clearTimeout(this.timer); // Clear the timer if it hasn't already expired

    // Navigate to the confirmation page
    // Replace "/confirmation" with the path to your confirmation page
    window.location.href = "/confirmation";
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
