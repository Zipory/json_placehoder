import "./App.css";
import Yom_zvaa from "./Components/Yom_zvaa";
import "./App.css";
import Welcom from "./Components/Welcom";
import Home from "./Components/Home";
import { Routes, Route, Link } from "react-router-dom";
import Posts from "./Posts";
import Albums from "./Components/Albums";
import Todos from "./Components/Todos";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Yom_zvaa />
        {/* <Welcom /> */}
        {/* <Home /> */}
        <button>
          <Link to={"/"}>Home</Link>
        </button>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="/posts/some" element={<h1>Some</h1>} />
        </Route>
        <Route path="/albums" element={<Albums />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<h1>Error 404 page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
