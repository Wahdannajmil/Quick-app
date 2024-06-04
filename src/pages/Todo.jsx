import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoList from '../components/todo/TodoList';
import TodoForm from '../components/todo/TodoForm';

const Todo = () => {
  const { todos, addTodo, updateTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div>
      <h1 className="text-2xl font-bold">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
