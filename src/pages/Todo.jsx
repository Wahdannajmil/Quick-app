import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoList from '../components/todo/TodoList';
import TodoForm from '../components/todo/TodoForm';

const Todo = () => {
  const { todos, updateTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div>
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
