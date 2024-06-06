import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ChatContext } from '../../contexts/ChatContext';
import '@fontsource/poppins';

const GroupList = ({ groups }) => {
  const { messages } = useContext(ChatContext);

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {groups.map((group, index) => {
        const latestMessage = messages[group.id] ? messages[group.id][0]?.body.split(' ').slice(0, 3).join(' ') : 'No recent messages';

        const createdAtDate = new Date(group.createdAt);

        return (
          <div key={group.id}>
            <Link to={`/chat/${group.id}`} className="block mb-2">
              <div className="flex justify-between items-center p-2 rounded">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUser} className="bg-[#2F80ED] m-4 p-4 rounded-full text-white" />
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span className="text-[#2F80ED] mr-2 text-md">{group.name}</span>
                      <span className="text-gray-500 text-md pl-2">
                        {createdAtDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} {createdAtDate.toLocaleTimeString()}
                      </span>
                    </div>
                    <div className='flex flex-col'>
                      <span className="text-gray-800 text-semibold mr-2">{group.name}:</span>
                      <span className="text-gray-500 text-sm">{latestMessage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            {index !== groups.length - 1 && <hr className="my-2 border-gray-400" />}
          </div>
        );
      })}
    </div>
  );
};

export default GroupList;
