import { Routes, Route } from "react-router-dom";
import Branches from "./branches/branches";
import Home from './home/home'
import Nav from './nav'
import Contact from "./contact/contact";
import About from "./about/about";
import Products from "./prodcuts/products";
import "./App.css";

function App() {
  return (
    <div>
        <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sucursales" element={<Branches/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/products" element={<Products/>} />

      </Routes>
    </div>
  );
}

export default App;
