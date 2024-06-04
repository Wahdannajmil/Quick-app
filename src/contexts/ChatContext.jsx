import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setChats(response.data.slice(0, 10))) // Mengambil 10 data pertama
      .catch(error => console.error(error));
  }, []);

  const addMessage = (chatId, message) => {
    setChats(chats.map(chat => (
      chat.id === chatId ? { ...chat, messages: [...chat.messages, message] } : chat
    )));
  };

  return (
    <ChatContext.Provider value={{ chats, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
