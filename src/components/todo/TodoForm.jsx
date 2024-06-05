import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faCalendarAlt, faAlignLeft } from '@fortawesome/free-solid-svg-icons';

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
    <div className="mt-4 text-right">
      {!showForm && (
        <button onClick={() => setShowForm(true)} className="flex items-center text-white bg-blue-500 px-4 py-2 rounded-md shadow-md ml-auto">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          New Task
        </button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 p-4 bg-gray-100 rounded-md">
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faAlignLeft} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter new task..."
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              className="border rounded-md px-3 py-2 flex-grow"
            />
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500 mr-2" />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border rounded-md px-3 py-2 flex-grow"
            />
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faAlignLeft} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-md px-3 py-2 flex-grow"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="text-white bg-blue-500 px-4 py-2 rounded-md mr-2">
              Add
            </button>
            <button onClick={() => setShowForm(false)} className="text-red-500">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TodoForm;
