import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title, completed: false };
    addTodo(newTodo);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Add</button>
    </form>
  );
};

export default TodoForm;
