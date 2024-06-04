import React, { useContext } from 'react';
import { ChatContext } from '../contexts/ChatContext';
import ChatList from '../components/Chat/ChatList';
import ChatDetail from '../components/Chat/ChatDetail';

const Inbox = () => {
  const { chats, addMessage } = useContext(ChatContext);

  return (
    <div>
      <h1 className="text-2xl font-bold">Inbox</h1>
      <div className="flex">
        <ChatList chats={chats} />
        <ChatDetail chats={chats} addMessage={addMessage} />
      </div>
    </div>
  );
};
export default Inbox;
