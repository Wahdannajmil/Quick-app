import React, { useState } from 'react';

const ChatDetail = ({ chats, addMessage }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (selectedChat) {
      addMessage(selectedChat.id, { body: message, id: Date.now() });
      setMessage('');
    }
  };

  return (
    <div className="w-3/4 p-4">
      {selectedChat ? (
        <div>
          <h2 className="text-2xl font-bold">{selectedChat.name}</h2>
          <ul>
            {selectedChat.messages.map(msg => (
              <li key={msg.id} className="border p-2 my-2">
                {msg.body}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSendMessage} className="mt-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="border p-2 mr-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
          </form>
        </div>
      ) : (
        <p>Select a chat to view details</p>
      )}
    </div>
  );
};

export default ChatDetail;
