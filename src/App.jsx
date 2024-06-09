import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Todo from './pages/Todo';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import { TodoProvider } from './contexts/TodoContext';
import { ChatProvider } from './contexts/ChatContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#353535] font-poppins">
        <div className="hidden md:flex md:w-1/6 bg-[#353535] border-r-2 border-[#8a817c]"></div>
        <div className="flex flex-col w-full md:w-5/6 bg-[#353535]">
          <div className="p-4 flex items-center justify-between bg-[#8a817c] w-full">
            <span className="text-white font-medium">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
            </span>
          </div>
          <div className="w-full md:w-1/2 bg-white flex flex-col mb-24 mr-6 mt-10 ml-auto overflow-hidden rounded-md">
            <div className="flex-1 pt-2 pl-2 pr-2 overflow-auto">
              <TodoProvider>
                <ChatProvider>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/inbox" element={<HomePage />} />
                    <Route path="/chat/:groupId" element={<ChatPage />} />
                  </Routes>
                </ChatProvider>
              </TodoProvider>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
