import React, { useState } from 'react';
import Bar from './components/bar/Bar';
import TodoItem from './components/todoitem/TodoItem';
import './App.css';

const App = () => {
  //Initial todos for the app
  const initialTodos = [
    { id: 1, name: 'Go to the supermarket', complete: false },
    { id: 2, name: 'Call Alice', complete: false },
    { id: 3, name: 'Ask Alice to call Bob', complete: false },
    { id: 4, name: 'Do the dishes', complete: false },
    { id: 5, name: 'Change car tyres', complete: false }
  ];

  const [todos, setTodos] = useState(initialTodos);

  /**
   * Submit a new todo
   * @param {string} newTodo - name of the new todo
   */
  const submitTodo = newTodo => {
    const newTodos = todos.slice();
    newTodos.push({
      id: todos.length + 1,
      name: newTodo,
      complete: false
    });
    setTodos(newTodos);
  };

  /**
   * Toggle the completion status of a todo
   * @param {number} id - id of the todo to edit
   */
  const toggleTodoStatus = todo => {
    const todoItems = todos.slice();
    const index = todoItems.indexOf(todo);
    todoItems[index].complete = !todoItems[index].complete;
    setTodos(todoItems);
  };

  /**
   * Remove a todo from the todo list
   * @param {number} id - id of the todo to remove
   */
  const removeTodo = id => {
    const todoItems = todos.filter(todo => todo.id !== id);
    setTodos(todoItems);
  };

  return (
    <div>
      <h3>Todos</h3>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleTodoStatus}
          onRemove={removeTodo}
        />
      ))}
      <Bar onSubmit={submitTodo} />
    </div>
  );

  //onRemoveClick(id) {
  ////implement this logic
  //console.log('Remove Item!');
  //}
};

export default App;
