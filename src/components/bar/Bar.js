import React, { useState } from 'react';
import './bar.css';

const Bar = ({ onSubmit }) => {
  const [newTodo, setNewTodo] = useState('');

  //On form submit
  const submit = e => {
    e.preventDefault();
    onSubmit(newTodo);
    setNewTodo('');
  };

  return (
    <div className="wrapper">
      <form className="bar-form" onSubmit={submit} data-testid="bar-form">
        <div>
          <input
            className="bar-form-control"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={({ target }) => setNewTodo(target.value)}
            required
            data-testid="bar-input"
          />
          <label
            className="bar-form-control-placeholder"
            htmlFor="newTodo"
            data-testid="bar-label"
          >
            Add new todo
          </label>
          <button
            className="btn btn-submit"
            type="submit"
            value="Submit"
            data-testid="bar-submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bar;
