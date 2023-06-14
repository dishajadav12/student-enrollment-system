
import { createChatBotMessage } from "react-chatbot-kit";
import GotItButton from "./widgets/GotItButton";
import AgeQuestion from "./widgets/AgeQuestion"; // Import the new AgeQuestion widget
import Name from "./widgets/Name";

const config = {
  botName: "Student Info Bot",
  initialMessages: [
    createChatBotMessage("Hello, Welcome to the student info system!", {
      widget: "Gotit",
    }),
  ],
  widgets: [
    {
      widgetName: "Gotit",
      widgetFunc: (props) => <GotItButton {...props} />,
    },
    {
      widgetName: "Name",
      widgetFunc: (props) => <Name {...props} />,
    },
    {
      widgetName: "AgeQuestion", // Add the AgeQuestion widget
      widgetFunc: (props) => <AgeQuestion {...props} />,
    },
   
  ],
};

export default config;
