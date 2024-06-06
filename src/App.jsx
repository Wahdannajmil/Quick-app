import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment } from '@fortawesome/free-regular-svg-icons';
import Home from './pages/Home';
import Todo from './pages/Todo';
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import { TodoProvider } from './contexts/TodoContext';
import { ChatProvider } from './contexts/ChatContext';
import { faBoltLightning, faList, faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#353535]">
        <div className="w-1/6 bg-[#353535] border-r-2 border-[#8a817c]"></div>
        <div className="flex flex-col w-5/6 bg-[#353535]">
          <div className="p-4 flex items-center justify-between bg-[#8a817c] w-full">
            <span className="text-white font-medium">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
            </span>
          </div>
          <div className="w-3/6 bg-white flex flex-col mb-24 mr-6 mt-10 ml-auto overflow-hidden rounded-md">
            <div className="flex-1 pt-2 pl-2 pr-2 overflow-auto">
              <TodoProvider>
                <ChatProvider>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/inbox" element={<HomePage/>} />
                    <Route path="/chat/:groupId" element={<ChatPage/>} />
                  </Routes>
                </ChatProvider>
              </TodoProvider>
            </div>
          </div>
        </div>
        <nav className="p-4 fixed bottom-0 right-0 m-2">
          <div className="flex flex-row space-x-4 items-center">
            <div className="flex flex-col items-center">
              <Link to="/todo" className="text-[#a42fed] bg-white p-4 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faList} size="26" />
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/inbox" className="bg-white text-[#F8B76B] p-4 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faComment} size="26" />
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/" className="text-white bg-[#2F80ED] p-4 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faBoltLightning} size="26" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default App;