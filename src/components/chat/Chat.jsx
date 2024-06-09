import React from 'react';
import Message from '../chat/Message';

const Chat = ({ messages, onEdit, onDelete, onReply }) => {
  const reversedMessages = messages ? messages.slice().reverse() : [];

  return (
    <div className='border-t-2 w-full border-gray-300'>
    <div className="mt-4 ">
      {reversedMessages.map((message) => (
        <Message key={message.id} message={message} onEdit={onEdit} onDelete={onDelete} onReply={onReply} />
        ))}
    </div>
    </div>
  );
};

export default Chat;