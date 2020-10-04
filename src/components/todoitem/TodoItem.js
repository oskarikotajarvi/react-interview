import React from 'react';
import './todoItem.css';

const TodoItem = ({ todo, onRemove, toggleComplete }) => {
  const completeStyle = todo.complete ? 'complete' : 'incomplete';

  return (
    <div className="wrapper">
      <h3 className={`todo-title ${completeStyle}`}>{todo.name}</h3>
      <div className="btn-pair">
        <button
          className={`ctrl-btn btn-check ${completeStyle}`}
          onClick={() => toggleComplete(todo)}
        >
          <i className="fas fa-check" />
        </button>
        <button
          className="ctrl-btn btn-trash"
          onClick={() => onRemove(todo.id)}
        >
          <i className="fas fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
