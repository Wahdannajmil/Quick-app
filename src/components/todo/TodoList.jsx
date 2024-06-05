import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faClock } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown, faPencilAlt, faTrash, faChevronUp, faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'; // Solid icons

const TodoList = ({ todos, updateTodo, deleteTodo, isLoading }) => {
  const [visibleDetails, setVisibleDetails] = useState(null);
  const [showDeleteButtonId, setShowDeleteButtonId] = useState(null);

  const formatDate = (dueDate) => {
    const date = new Date(dueDate);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  const handleEllipsisClick = (e, id) => {
    e.stopPropagation(); // Prevent parent click event
    setShowDeleteButtonId(showDeleteButtonId === id ? null : id);
  };

  const handleDeleteClick = (e, id) => {
    e.stopPropagation(); // Prevent parent click event
    deleteTodo(id);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <button className="text-gray-700 hover:text-gray-900 relative p-2 w-28 bg-white border rounded-md shadow-md" onClick={() => document.querySelector('.dropdown-menu').classList.toggle('hidden')}>
            My Task
            <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
          </button>
          <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-md hidden dropdown-menu">
            <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Personal Errands</button>
            <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Urgent Todo</button>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {todos.map(todo => (
            <React.Fragment key={todo.id}>
              <li className="p-4 flex items-start justify-between bg-gray-50 rounded-md">
                <div className="flex items-start">
                  <button
                    className="mr-2 mt-1"
                    onClick={() => updateTodo({ ...todo, completed: !todo.completed })}
                  >
                    <FontAwesomeIcon className='text-[#828282] w-5 h-5 mr-1' icon={todo.completed ? faCheckSquare : faSquare} />
                  </button>
                  <div>
                    <h2 className={`text-lg text-[#4f4f4f] font-bold ${todo.completed ? "text-[#828282] line-through" : ""}`}>{todo.title}</h2>
                    {visibleDetails === todo.id && (
                      <div className="flex items-center text-[#828282] text-sm mt-1">
                        <FontAwesomeIcon icon={faClock} className="mr-1 text-[#2f80ed]" />
                        <span>{formatDate(todo.dueDate)}</span>
                      </div>
                    )}
                    {visibleDetails === todo.id && (
                      <div className="flex items-center text-sm mt-1">
                        <FontAwesomeIcon icon={faPencilAlt} className="mr-1" />
                        <p className="text-[#828282]">{todo.description}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 text-[#4f4f4f]">{formatDate(todo.dueDate)}</div>
                  <button className="text-[#4f4f4f] hover:text-gray-900" onClick={() => toggleDetails(todo.id)}>
                    <FontAwesomeIcon icon={visibleDetails === todo.id ? faChevronUp : faChevronDown} />
                  </button>
                  <div className="relative ml-2">
                    <button onClick={(e) => handleEllipsisClick(e, todo.id)} className="text-gray-500 hover:text-gray-700">
                      <FontAwesomeIcon icon={faEllipsisH} />
                    </button>
                    {showDeleteButtonId === todo.id && (
                      <button onClick={(e) => handleDeleteClick(e, todo.id)} className="absolute top-full right-0 mt-1 px-2 py-1 text-red-500 hover:text-red-700 border border-red-500 rounded-md bg-white hover:bg-red-100 transition duration-200">
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </li>
              <hr className="my-2 border-gray-400" />
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
