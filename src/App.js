import "./App.css";
import Yom_zvaa from "./Components/Yom_zvaa";
import './App.css';
import Welcom from './Components/Welcom';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Yom_zvaa />
      <Welcom/>
      <Home/>
      </header>
    </div>
  );
}

export default App;
