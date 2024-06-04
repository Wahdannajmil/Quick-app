import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Inbox from './pages/Inbox';
import { TodoProvider } from './contexts/TodoContext';
import { ChatProvider } from './contexts/ChatContext';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto">
            <Link to="/" className="text-white mr-4">Home</Link>
            <Link to="/todo" className="text-white mr-4">Todo List</Link>
            <Link to="/inbox" className="text-white">Inbox</Link>
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <TodoProvider>
            <ChatProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/inbox" element={<Inbox />} />
              </Routes>
            </ChatProvider>
          </TodoProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
