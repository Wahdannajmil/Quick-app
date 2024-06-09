import React, { useState } from 'react';

const MessageForm = ({ groupId, onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onSubmit(groupId, text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white pb-3 pt-3 w-full font-poppins">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-9 p-2 border border-gray-500 rounded-md mr-4 focus:outline-none focus:border-gray-600 resize-none placeholder-gray-400 text-sm"
        placeholder="Type a new message"
      />  
      <button type="submit" className="bg-blue-500 text-white rounded-md text-sm px-6 py-2 hover:bg-blue-600 focus:outline-none">Send</button>
    </form>
  );
};

export default MessageForm;
