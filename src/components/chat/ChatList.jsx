import React from 'react';

const ChatList = ({ chats }) => (
  <div className="w-1/4 border-r">
    <ul>
      {chats.map(chat => (
        <li key={chat.id} className="p-2 border-b">
          <h2 className="text-xl font-bold">{chat.name}</h2>
          <p>{chat.body}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ChatList;
