import Branches from "../branches/branches";
import Home from "../home/home";
import Nav from "../nav/nav";
import Contact from "../contact/contact";
import About from "../about/about";
import Products from "../prodcuts/products";
import style from "./App.module.css";
import ScrollButton from "./Scroll";


function App() {


  return (

    <div className={style}>

      <Nav />

      <section>
      <ScrollButton />
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
