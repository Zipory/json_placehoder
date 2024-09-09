import React, { useEffect, useState } from "react";
import Fetch from "./fetch";
import Todo from "./Todo";
const Todos = (props) => {
  const [todos, setTodos] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/todos?userId=1";

  useEffect(() => {
    Fetch(url, setTodos);
  }, []);
  return (
    <>
      <div>Todos</div>
      {todos.map((item, i) => (
        <Todo todo={item} key={i} />
      ))}
      {/* <p>{todos[0]?.title}</p> */}
    </>
  );
};

export default Todos;
