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
      <h2>Todos</h2>
      <div className="sort">
        <button
          onClick={() => {
            setTodos((prev) => {
              const sortedTodos = [...prev].sort((a, b) => a.id - b.id);
              return sortedTodos;
            });
          }}>
          1 to 2
        </button>
        <button
          onClick={() => {
            setTodos((prev) => {
              const sortedTodos = [...prev].sort((a, b) =>
                a.title.localeCompare(b.title)
              );
              return sortedTodos;
            });
          }}>
          A to B
        </button>

        <button
          onClick={() => {
            setTodos((prev) => {
              const sortedTodos = [...prev].filter((x) => x.completed);
              return sortedTodos;
            });
          }}>
          checked first
        </button>
        <button onClick={() => {}}>Random</button>
      </div>
      {todos.map((item, i) => (
        <Todo todo={item} key={i} />
      ))}
    </>
  );
};

export default Todos;
