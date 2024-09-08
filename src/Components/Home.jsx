import { Link } from "react-router-dom";

import React from 'react';


function Home() {
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
