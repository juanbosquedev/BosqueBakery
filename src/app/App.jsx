import Branches from "../branches/branches";
import Home from "../home/home";
import Nav from "../nav/nav";
import Contact from "../contact/contact";
import About from "../about/about";
import Products from "../prodcuts/products";
import style from "./App.module.css";
import { useState, useEffect } from 'react';

function App() {
  

  
 
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) { // Define tu propio valor de umbral
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  return (
    <div className={style}>
      <Nav />
      <section>
      <button
      className={`scroll-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      Subir
    </button>
        <Home />
        <About />
        <Branches />
        <Contact />
        <Products />
      </section>
    </div>
  );
}

export default App;
