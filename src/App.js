import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Redux/reducers';
import HomePage from './Components/HomePage';
import ChatbotPage from './Components/Chatbot/ChatBotPage';
import ConfirmationPage from './Components/ConfirmationPage';

const store = createStore(rootReducer);

const App = () => {
 
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
