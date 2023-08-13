import Branches from "../branches/branches";
import Home from "../home/home";
import Nav from "../nav/nav";
import Contact from "../contact/contact";
import About from "../about/about";
import Products from "../prodcuts/products";
import style from "./App.module.css";
// import ScrollButton from "./Scroll";
import { lazy, Suspense } from "react"; //importacion dinámica

const ScrollButton = lazy(() => import("./Scroll")); //promesa, se ejecuta la importación una vez que es utilizado en el componente, por eso es dinámico, sino no se iporta hasta tanto

function App() {
  return (
    <div className={style}>
      <Nav />

      <section>
        <Suspense fallback={<div>rendering</div>}>
          {/*resolución de la promesa, mensaje de renderizado*/}
          <ScrollButton />
        </Suspense>

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
