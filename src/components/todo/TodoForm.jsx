import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faCalendarAlt, faListAlt } from '@fortawesome/free-solid-svg-icons'; // Menggunakan ikon FontAwesome yang lebih menarik

const TodoForm = ({ addTodo }) => {
  const [showForm, setShowForm] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodoTitle.trim() || !description.trim() || !dueDate.trim()) {
      setError('Please fill out all fields.');
      return;
    }
    const newTodo = {
      title: newTodoTitle,
      description: description,
      dueDate: dueDate,
      completed: false,
    };
    addTodo(newTodo);
    setNewTodoTitle('');
    setDescription('');
    setDueDate('');
    setShowForm(false);
    setError('');
  };

  return (
    <div className="relative text-right">
      <button onClick={() => setShowForm(!showForm)} className="flex items-center text-white bg-blue-500 px-4 py-2 rounded-md shadow-md ml-auto">
        <FontAwesomeIcon icon={showForm ? faTimes : faPlus} className="mr-2" />
        {showForm ? 'Cancel' : 'New Task'}
      </button>
      {showForm && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-md border border-gray-300 z-10">
          <form onSubmit={handleSubmit} className="p-4">
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faListAlt} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Type Task Title"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                className="border rounded-md px-3 py-2 flex-grow"
              />
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500 mr-2" /> 
              <input
                type="date"
                placeholder="Set Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border rounded-md px-3 py-2 flex-grow"
              />
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faListAlt} className="text-gray-500 mr-2" /> 
              <input
                type="text"
                placeholder="Enter description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border rounded-md px-3 py-2 flex-grow"
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="text-white bg-blue-500 p-2 rounded-md">
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TodoForm;
