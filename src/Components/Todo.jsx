import React, { useState, useEffect } from "react";
const Todo = ({ todo, setTodoCLicked }) => {
  const [completed, setCompleted] = useState();

  useEffect(() => setCompleted(todo.completed), [todo]);
  return (
    <div
      className="todo"
      onClick={() => {
        setTodoCLicked(todo.id);
      }}>
      <h3>Todo: {todo.id}</h3>
      <input
        onChange={() =>
          setCompleted(() => {
            todo.completed = !completed;
            return !completed;
          })
        }
        type="checkbox"
        checked={completed}
      />
      <p>{todo.title}</p>
    </div>
  );
};

export default Todo;
