import React, { useEffect, useState, useRef } from "react";
import Fetch from "./fetch";
import Todo from "./Todo";

let prevLen = 0;

const Todos = (props) => {
  const [todos, setTodos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos?userId=1";

  useEffect(() => {
    Fetch(url, setTodos);
  }, []);
  const [miniTodos, setMiniTodos] = useState([]);
  useEffect(() => {
    setMiniTodos(todos);
  }, [todos]);
  let search = useRef(0);
  return (
    <>
      <h2>Todos</h2>
      <div className="sort">
        <button
          onClick={() => {
            setMiniTodos((prev) => {
              const sortedTodos = [...prev].sort((a, b) => a.id - b.id);
              return sortedTodos;
            });
          }}
        >
          1 to 2
        </button>
        <button
          onClick={() => {
            setMiniTodos((prev) => {
              const sortedTodos = [...prev].sort((a, b) =>
                a.title.localeCompare(b.title)
              );
              return sortedTodos;
            });
          }}
        >
          A to B
        </button>

        <button
          onClick={() => {
            setMiniTodos((prev) => {
              const sortedTodos = [...prev].filter((x) => x.completed);
              const falseTodos = [...prev].filter((x) => !x.completed);
              return [...sortedTodos, ...falseTodos];
            });
          }}
        >
          checked first
        </button>
        <button
          onClick={() => {
            setMiniTodos((prev) => {
              let temp = [...prev];
              let currentIndex = temp.length;
              // While there remain elements to shuffle...
              while (currentIndex !== 0) {
                // Pick a remaining element...
                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [temp[currentIndex], temp[randomIndex]] = [
                  temp[randomIndex],
                  temp[currentIndex],
                ];
              }
              return temp;
            });
          }}
        >
          Random
        </button>
        <div>
          <input
            onChange={() => {
              if (search.current.value.length < prevLen) {
                setMiniTodos(() => [...todos]);
              }
              prevLen = search.current.value.length;
              searchMe(setMiniTodos, search.current.value);
            }}
            type="text"
            placeholder="input search value / id"
            ref={search}
          />
        </div>
      </div>
      {miniTodos.map((item, i) => (
        <Todo todo={item} key={i} />
      ))}
    </>
  );
};

function searchMe(setMiniTodos, value) {
  setMiniTodos((prev) =>
    [...prev]?.filter(
      (item) =>
        item.title?.includes(value) || `${item.id}`.includes(value)  
    )
  );
}

export default Todos;
