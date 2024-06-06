import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ChatContext } from '../contexts/ChatContext';
import Breadcrumb from '../components/chat/Breadcrumb';
import Chat from '../components/chat/Chat';
import MessageForm from '../components/chat/MessageForm';
import Loading from '../components/chat/Loading';
import '@fontsource/poppins';

const ChatPage = ({ history }) => {
  const { groupId } = useParams();
  const { fetchMessages, messages, currentGroup, loading, groups, sendMessage, editMessage, deleteMessage, replyMessage } = useContext(ChatContext);

  useEffect(() => {
    fetchMessages(groupId);
  }, [groupId]);

  const group = groups.find(group => group.id === parseInt(groupId));

  if (loading) return <Loading />;

  const handleClose = () => {
    history.push('/');
  };

  return (
    <div className="p-4 relative flex flex-col min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Breadcrumb />
          {group && (
            <span className="text-xl font-bold ml-4">{group.name}</span>
          )}
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faTimes} className="text-xl cursor-pointer" onClick={handleClose} />
        </div>
      </div>
      <div className="flex-grow">
        <Chat messages={messages[currentGroup]} onEdit={editMessage} onDelete={deleteMessage} onReply={replyMessage} />
      </div>
      <div className='bottom-0 sticky'>
      <MessageForm groupId={groupId} onSubmit={sendMessage} />
      </div>
    </div>
  );
};

export default ChatPage;
