import React, { useRef } from "react";

const DeletTodo = (props) => {
  let id = useRef(-1);

  const setTodos = props.setTodos;

  return (
    <>
      <div>DeletTodo</div>
      <input ref={id} type="number">
        Choose your todo
      </input>
      <button
        onClick={() => {
          if (id.current.value !== -1) {
            setTodos((prev) =>
              [...prev].filter((todo) => todo.id !== id.current.value)
            );
            console.log("delet", id.current.value);

            id.current.value = -1;
          }
        }}>
        Delet
      </button>
    </>
  );
};

export default DeletTodo;
