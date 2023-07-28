import { Routes, Route } from "react-router-dom";
import Branches from "./branches";
import Home from './home'
import Nav from './nav'
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Nav/>
        <Route path="/" element={Home} />
        <Route path="/sucursales" element={Branches} />
      </Routes>
    </div>
  );
}

export default App;
