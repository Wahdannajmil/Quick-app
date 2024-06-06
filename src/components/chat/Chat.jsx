import React from 'react';
import Message from '../chat/Message';

const Chat = ({ messages, onEdit, onDelete, onReply }) => {
  const reversedMessages = messages ? messages.slice().reverse() : [];

  return (
    <div className="mb-4">
      {reversedMessages.map((message) => (
        <Message key={message.id} message={message} onEdit={onEdit} onDelete={onDelete} onReply={onReply} />
      ))}
    </div>
  );
};

export default Chat;