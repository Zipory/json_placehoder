import { Link } from "react-router-dom";
import Async from "./Async";
import React , { useState, useEffect, useContext}from 'react';
import { UserContext } from "../App";

function Home() {
    let url = "https://jsonplaceholder.typicode.com/users/1"
    const [user, setUser] = useContext(UserContext);
    useEffect( () => {
        Async(url,  setUser)    
    } , [] )
  return (
    <div>
      <button>
        <Link to={"/todos"}>Todos</Link>
      </button>
      <button>
        <Link to={"/posts"}>Posts</Link>
      </button>
      <button>
        <Link to={"/albums"}>Albums</Link>
      </button>
    </div>
  );
}

export default Home;
