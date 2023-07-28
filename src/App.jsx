import { Routes, Route } from "react-router-dom";
import Branches from "./branches";
import Home from './home'
import Nav from './nav'
import "./App.css";

function App() {
  return (
    <div>
        <Nav/>
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/sucursales" element={<Branches/>} />
        <Route path="/contacto" element={<Contact/>} />

      </Routes>
    </div>
  );
}

export default App;
