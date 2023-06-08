import { createChatBotMessage } from "react-chatbot-kit";
import GotItButton from "./GotItButton";

const config = {
  botName: "Student Info Bot",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, 
   { widget: "Gotit"}, )],
    widgets: [
      {
        widgetName: "Gotit",
        widgetFunc: (props) => <GotItButton {...props}/>
      }
    ]
};

export default config
