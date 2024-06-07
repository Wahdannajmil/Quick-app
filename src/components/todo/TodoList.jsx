// import React, { useState, useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faSquare, faCalendar, faClock, faPencilAlt, faTrash, faChevronUp, faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { TodoContext } from '../../contexts/TodoContext';
// import { formatDistanceToNow } from 'date-fns';
// import TodoForm from './TodoForm';

// const TodoList = () => {
//   const { addTodo, todos, updateTodo, deleteTodo, isLoading } = useContext(TodoContext);
//   const [visibleDetails, setVisibleDetails] = useState(null);
//   const [showDeleteButtonId, setShowDeleteButtonId] = useState(null);
//   const [filter, setFilter] = useState('All');

//   const formatDate = (dueDate) => {
//     const date = new Date(dueDate);
//     return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//   };

//   const toggleDetails = (id) => {
//     setVisibleDetails(visibleDetails === id ? null : id);
//   };

//   const handleEllipsisClick = (e, id) => {
//     e.stopPropagation();
//     setShowDeleteButtonId(showDeleteButtonId === id ? null : id);
//   };

//   const handleDeleteClick = (e, id) => {
//     e.stopPropagation();
//     deleteTodo(id);
//   };

//   const handleFilterChange = (category) => {
//     setFilter(category);
//   };

//   const filteredTodos = filter === 'All' ? todos : todos.filter(todo => todo.category === filter);

  // return (
  //   <div className="bg-white p-4 rounded-md shadow-md min-h-screen font-poppins">
  //     <div className="flex justify-between items-center mb-4">
  //       <div className="relative">
  //         <button
  //           className="text-[#4f4f4f] hover:text-gray-900 relative m-auto p-2 w-28 bg-white border border-[#828282] rounded-md"
  //           onClick={() => document.querySelector('.dropdown-menu').classList.toggle('hidden')}
  //         >
  //           My Task
  //           <FontAwesomeIcon icon={faChevronDown} className="ml-3" />
  //         </button>
  //         <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-md hidden dropdown-menu z-20">
  //           <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleFilterChange('Personal Errands')}>Personal Errands</button>
  //           <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleFilterChange('Urgent Todo')}>Urgent Todo</button>
  //         </div>
  //       </div>
  //       <div>
  //         <TodoForm addTodo={addTodo} />
  //       </div>
  //     </div>
// {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <ul>
//           {filteredTodos.map(todo => (
//             <React.Fragment key={todo.id}>
//               <li className="p-4 flex items-start justify-between bg-gray-50 rounded-md">
//                 <div className="flex items-start">
//                   <button
//                     className="mr-2 mt-1"
//                     onClick={() => updateTodo({ ...todo, completed: !todo.completed })}
//                   >
//                     <FontAwesomeIcon className='text-[#828282] w-5 h-5 mr-1' icon={todo.completed ? faCheckSquare : faSquare} />
//                   </button>
//                   <div className="flex flex-col max-w-64">
//                     <div className="flex items-center">
//                       <h2 className={`text-lg text-[#4f4f4f] font-bold ${todo.completed ? "text-[#828282] line-through" : ""}`}>
//                         {todo.title}
//                       </h2>
//                     </div>

//                     {visibleDetails === todo.id && (
//                       <div className="flex items-center text-[#828282] text-sm mt-2">
//                         <FontAwesomeIcon icon={faClock} className="mr-2 text-[#2f80ed]" />
//                         <DatePicker
//                           selected={new Date(todo.dueDate)}
//                           onChange={(date) => updateTodo({
//                             ...todo,
//                             dueDate: date
//                           })}
//                           dateFormat="dd/MM/yyyy"
//                           className="border rounded-md px-2 py-1 text-[#4f4f4f] ml-2"
//                         />
//                       </div>
//                     )}

//                     {visibleDetails === todo.id && (
//                       <div className="flex items-center text-sm mt-2">
//                         <FontAwesomeIcon icon={faPencilAlt} className="mr-4 text-[#2f80ed]" />
//                         <p className="text-[#828282]">{todo.description}</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="text-sm mr-4 text-red-600 ml-auto">
//                     {formatDistanceToNow(new Date(todo.dueDate), { addSuffix: true })}
//                   </span>
//                   <div className="mr-4 text-[#4f4f4f] text-sm">{formatDate(todo.dueDate)}</div>
//                   <button className="text-[#4f4f4f] hover:text-gray-900" onClick={() => toggleDetails(todo.id)}>
//                     <FontAwesomeIcon icon={visibleDetails === todo.id ? faChevronUp : faChevronDown} />
//                   </button>
//                   <div className="relative ml-4">
//                     <button onClick={(e) => handleEllipsisClick(e, todo.id)} className="text-gray-500 hover:text-gray-700">
//                       <FontAwesomeIcon icon={faEllipsisH} />
//                     </button>
//                     {showDeleteButtonId === todo.id && (
//                       <button onClick={(e) => handleDeleteClick(e, todo.id)} className="absolute top-full right-0 mt-1 px-2 py-1 text-red-500 hover:text-red-700 border border-[#828282] rounded-md bg-white hover:bg-red-100 transition duration-200">
//                         Delete
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </li>
//               <hr className="my-2 border-gray-400" />
//             </React.Fragment>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TodoList;

import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown, faPencilAlt, faTrash, faChevronUp, faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TodoContext } from '../../contexts/TodoContext';
import { formatDistanceToNow } from 'date-fns';
import TodoForm from './TodoForm';

const TodoList = () => {
  const { todos, updateTodo, deleteTodo, isLoading, addTodo } = useContext(TodoContext);
  const [visibleDetails, setVisibleDetails] = useState(null);
  const [showDeleteButtonId, setShowDeleteButtonId] = useState(null);
  const [filter, setFilter] = useState('All');

  const formatDate = (dueDate) => {
    const date = new Date(dueDate);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  const handleEllipsisClick = (e, id) => {
    e.stopPropagation();
    setShowDeleteButtonId(showDeleteButtonId === id ? null : id);
  };

  const handleDeleteClick = (e, id) => {
    e.stopPropagation();
    deleteTodo(id);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredTodos = filter === 'All' ? todos : todos.filter(todo => todo.category === filter);

  return (
    <div className="bg-white p-4 rounded-md shadow-md min-h-screen font-poppins">
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <button
            className="text-[#4f4f4f] hover:text-gray-900 relative m-auto p-2 w-28 bg-white border border-[#828282] rounded-md"
            onClick={() => document.querySelector('.dropdown-menu').classList.toggle('hidden')}
          >
            My Task
            <FontAwesomeIcon icon={faChevronDown} className="ml-3" />
          </button>
          <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-md hidden dropdown-menu z-20">
            <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleFilterChange('Personal Errands')}>Personal Errands</button>
            <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleFilterChange('Urgent Todo')}>Urgent Todo</button>
          </div>
        </div>
        <div>
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {filteredTodos.map(todo => (
            <React.Fragment key={todo.id}>
              <li className="p-4 flex items-start justify-between bg-gray-50 rounded-md">
                <div className="flex items-start">
                  <button
                    className="mr-2 mt-1"
                    onClick={() => updateTodo({ ...todo, completed: !todo.completed })}
                  >
                    <FontAwesomeIcon className='text-[#828282] w-5 h-5 mr-1' icon={todo.completed ? faCheckSquare : faSquare} />
                  </button>
                  <div className="flex flex-col max-w-64">
                    <div className="flex items-center">
                      <h2 className={`text-lg text-[#4f4f4f] font-bold ${todo.completed ? "text-[#828282] line-through" : ""}`}>
                        {todo.title}
                      </h2>
                    </div>

                    {visibleDetails === todo.id && (
                      <div className="flex items-center text-[#828282] text-sm mt-2">
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-[#2f80ed]" />
                        <DatePicker
                          selected={new Date(todo.dueDate)}
                          onChange={(date) => updateTodo({
                            ...todo,
                            dueDate: date
                          })}
                          dateFormat="dd/MM/yyyy"
                          className="border rounded-md px-2 py-1 text-[#4f4f4f] ml-2"
                        />
                      </div>
                    )}

                    {visibleDetails === todo.id && (
                      <div className="flex items-center text-sm mt-2">
                        <FontAwesomeIcon icon={faPencilAlt} className="mr-4 text-[#2f80ed]" />
                        <p className="text-[#828282]">{todo.description}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-sm mr-4 text-red-600 ml-auto">
                    {formatDistanceToNow(new Date(todo.dueDate), { addSuffix: true })}
                  </span>
                  <div className="mr-4 text-[#4f4f4f] text-sm">{formatDate(todo.dueDate)}</div>
                  <button className="text-[#4f4f4f] hover:text-gray-900" onClick={() => toggleDetails(todo.id)}>
                    <FontAwesomeIcon icon={visibleDetails === todo.id ? faChevronUp : faChevronDown} />
                  </button>
                  <div className="relative ml-4">
                    <button onClick={(e) => handleEllipsisClick(e, todo.id)} className="text-gray-500 hover:text-gray-700">
                      <FontAwesomeIcon icon={faEllipsisH} />
                    </button>
                    {showDeleteButtonId === todo.id && (
                      <button onClick={(e) => handleDeleteClick(e, todo.id)} className="absolute top-full right-0 mt-1 px-2 py-1 text-red-500 hover:text-red-700 border border-[#828282] rounded-md bg-white hover:bg-red-100 transition duration-200">
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

export default TodoList