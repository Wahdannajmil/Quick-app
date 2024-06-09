import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faInbox, faHome } from '@fortawesome/free-solid-svg-icons'; 
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';

const Navigation = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="p-4 fixed bottom-0 right-0 mt-4 mr-2">
      <div className="flex flex-row space-x-4 items-center">
        <div className={`flex flex-col items-center transition-opacity duration-300 ${menuVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <span className="text-md text-white" style={{ display: menuVisible ? 'block' : 'none' }}>Task</span>
          <Link to="/todo" className="text-[#a42fed] bg-white p-4 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faTasks} size="26" />
          </Link>
        </div>
        <div className={`flex flex-col items-center transition-opacity duration-300 ${menuVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <span className="text-md text-white" style={{ display: menuVisible ? 'block' : 'none' }}>Inbox</span>
          <Link to="/inbox" className="bg-white text-[rgb(248,183,107)] p-4 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faCommentAlt} size="40" />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={toggleMenu}
            className="text-white bg-[#2F80ED] p-4 rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faHome} size="32" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
