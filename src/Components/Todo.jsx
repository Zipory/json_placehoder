import React, { useState } from "react";
const Todo = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  return (
    <>
      <h3>Todo:{todo.id}</h3>
      <p>{todo.title}</p>
      <input
        onClick={() => setCompleted(!completed)}
        type="checkbox"
        checked={completed}
      />
    </>
  );
};

export default Todo;
