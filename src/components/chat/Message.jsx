import React, { useContext, useState, useEffect, useRef } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Message = ({ message, onEdit, onDelete, onReply }) => {
  const { currentGroup } = useContext(ChatContext);
  const isMine = message.userId === currentGroup;
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState(message.body);
  const [showActions, setShowActions] = useState(false);
  const [showDeleteButtonId, setShowDeleteButtonId] = useState(null);
  const messageContainerRef = useRef(null);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(currentGroup, message.id, editedBody);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    onDelete(currentGroup, message.id);
  };

  const handleReply = () => {
    const replyBody = prompt('Type your reply:');
    if (replyBody) {
      onReply(currentGroup, message.id, replyBody);
    }
  };

  const createdAtDate = new Date(message.createdAt);

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

  const handleEllipsisClick = () => {
    setShowActions(!showActions);
    setShowDeleteButtonId(null); // Hide delete button when ellipsis is clicked
  };

  const handleDeleteButtonClick = () => {
    setShowDeleteButtonId(message.id); // Show delete button for this message
  };

  return (
    <div className={`flex flex-col ${isMine ? 'items-end' : 'items-start'} mb-2`} style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className={`font-semibold mb-1 ${isMine ? 'text-purple-600' : 'text-[#e5a443]'}`}>
        {isMine ? "You" : message.userName}
      </div>
      <div className='flex flex-row'>
        <div ref={messageContainerRef} className={`p-2 rounded-md ${isMine ? 'bg-purple-200 text-gray-600' : 'bg-yellow-100 text-gray-600'}`} style={{ maxWidth: '75%' }}>
          {isEditing ? (
            <textarea value={editedBody} onChange={(e) => setEditedBody(e.target.value)} rows="3" className="w-full p-2 border border-gray-300 rounded mb-2" />
          ) : (
            <div>{message.body}</div>
          )}
          <div className="text-xs text-right">{createdAtDate.toLocaleTimeString()}</div>
        </div>
        <div className="relative ml-4">
          <button onClick={handleEllipsisClick} className="text-gray-500 hover:text-gray-700">
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
          {showActions && (
            <div className={`absolute ${isMine ? 'right-0' : 'left-0'} mt-1 bg-white border border-gray-300 rounded-md shadow-lg`}>
              {!isMine && (
                <button onClick={handleReply} className="block px-4 py-2 text-green-500 hover:text-green-700 w-full text-left">
                  Reply
                </button>
              )}
              {isMine && (
                <>
                  {isEditing ? (
                    <button onClick={handleEdit} className="block px-4 py-2 text-blue-500 hover:text-blue-700 w-full text-left">
                      Save
                    </button>
                  ) : (
                    <button onClick={handleEdit} className="block px-4 py-2 text-blue-500 hover:text-blue-700 w-full text-left">
                      Edit
                    </button>
                  )}
                  <button onClick={handleDeleteButtonClick} className="block px-4 py-2 text-red-500 hover:text-red-700 w-full text-left">
                    Delete
                  </button>
                </>
              )}
            </div>
          )}
          {showDeleteButtonId === message.id && (
            <button onClick={handleDelete} className="absolute top-full right-0 mt-1 px-2 py-1 text-red-500 hover:text-red-700 border border-[#828282] rounded-md bg-white hover:bg-red-100 transition duration-200">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
