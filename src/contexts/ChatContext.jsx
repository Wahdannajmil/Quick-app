import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [messages, setMessages] = useState({});
  const [currentGroup, setCurrentGroup] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomDate = () => {
    const start = new Date();
    const end = new Date();
    start.setFullYear(start.getFullYear() - 1);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
  };

  useEffect(() => {
    const fetchGroups = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const groupsWithDate = response.data.map(group => ({
          ...group,
          createdAt: getRandomDate()
        }));
        setGroups(groupsWithDate);

        const messagesPromises = groupsWithDate.map(group => 
          axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${group.id}&_limit=1`)
        );

        const messagesResponses = await Promise.all(messagesPromises);
        const messagesData = messagesResponses.reduce((acc, response, index) => {
          acc[groupsWithDate[index].id] = response.data.map(message => ({
            ...message,
            userName: groupsWithDate[index].name
          }));
          return acc;
        }, {});

        setMessages(messagesData);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchGroups();
  }, []);

  const fetchMessages = async (groupId) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${groupId}&_limit=2`);
      const group = groups.find(g => g.id === parseInt(groupId));
      setMessages((prevMessages) => ({
        ...prevMessages,
        [groupId]: response.data.map(message => ({
          ...message,
          userName: group.name
        })),
      }));
      setCurrentGroup(groupId);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const sendMessage = (groupId, body) => {
    const newMessage = {
      id: Date.now(),
      userId: currentGroup,
      body,
      userName: "You",
      createdAt: new Date().toISOString(),
    };
    setMessages((prevMessages) => ({
      ...prevMessages,
      [groupId]: [newMessage, ...prevMessages[groupId] || []],
    }));
  };

  const editMessage = (groupId, messageId, newBody) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [groupId]: prevMessages[groupId].map(msg => 
        msg.id === messageId ? { ...msg, body: newBody } : msg
      ),
    }));
  };

  const deleteMessage = (groupId, messageId) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [groupId]: prevMessages[groupId].filter(msg => msg.id !== messageId),
    }));
  };

  const replyMessage = (groupId, messageId, replyBody) => {
    const originalMessage = messages[groupId].find(msg => msg.id === messageId);
    const replyMessage = {
      id: Date.now(),
      userId: currentGroup,
      body: `${replyBody} (reply to: ${originalMessage.body})`,
      userName: "You",
      createdAt: new Date().toISOString(),
    };
    setMessages((prevMessages) => ({
      ...prevMessages,
      [groupId]: [replyMessage, ...prevMessages[groupId]],
    }));
  };

  return (
    <ChatContext.Provider value={{ groups, messages, currentGroup, fetchMessages, sendMessage, editMessage, deleteMessage, replyMessage, loading }}>
      {children}
    </ChatContext.Provider>
  );
};
