import React, { useState } from "react";
const Todo = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);
  console.log(todo.id, todo.completed);

  return (
    <>
      <h3>Todo:{todo.id}</h3>
      <p>{todo.title}</p>
      <input
        onChange={() => setCompleted(!completed)}
        type="checkbox"
        checked={completed}
      />
    </>
  );
};

export default Todo;
