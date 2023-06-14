import React from 'react'
import {Chatbot} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import './Chatbot.css'


const ChatBotPage = () => {
  return (
    <div>
      <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBotPage;
