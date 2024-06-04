import React from 'react';

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id} className="border p-2 my-2">
        <h2 className="text-xl font-bold">{todo.title}</h2>
        <p>{todo.completed ? "Completed" : "Not completed"}</p>
        <button onClick={() => updateTodo({ ...todo, completed: !todo.completed })}>
          Toggle Complete
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;