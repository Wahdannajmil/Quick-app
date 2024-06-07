import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        const formattedTodos = response.data.slice(0, 20).map((todo, index) => ({
          ...todo,
          dueDate: new Date(Date.now() + Math.random() * (1000 * 3600 * 24 * 7)),
          description: "Deskripsi untuk tugas #" + todo.id,
          category: index < 10 ? "Personal Errands" : "Urgent Todo"
        }));
        setTodos(formattedTodos); 
        setIsLoading(false); 
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, isLoading, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };