import { Routes, Route } from "react-router-dom";
import Branches from "../branches/branches";
import Home from '../home/home'
import Nav from '../nav/nav'
import Contact from "../contact/contact";
import About from "../about/about";
import Products from "../prodcuts/products";
import style from './App.module.css'

function App() {
  return (
    <div className={style}>
        <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sucursales" element={<Branches/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contacto" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
