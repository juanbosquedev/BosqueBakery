import { useState, useEffect } from "react";
import style from "./nav.module.css";
import logo from "../assets/logoBig.png";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(true); // Estado para mostrar/ocultar el menú
  const [showButton, setShowButton] = useState(false); // Estado para mostrar/ocultar el botón

  // Función para manejar el cambio de tamaño de la ventana
  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setShowMenu(false);
      setShowButton(true);
    } else {
      setShowMenu(true);
      setShowButton(false);
    }
  };

  // Agregar un oyente de eventos para el cambio de tamaño de la ventana
  useEffect(() => {
    handleResize(); // Llama a la función para configurar el estado inicial
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.Nav} id="Nav">
      <img className={style.Nav_logo} src={logo} alt="logoBig" />
      {/* Botón para mostrar/ocultar el menú */}
      {showButton && (
        <button
          className={style.Nav_button}
          onClick={() => setShowMenu(!showMenu)}
        >
          Mostrar Menú
        </button>
      )}
      {/* Menú de navegación */}
      {showMenu && (
        <section className={style.Nav_main}>
          <a href="#inicio" onClick={() => setShowMenu(!showMenu)}>
            Inicio
          </a>
          <br />
          <a href="#productos" onClick={() => setShowMenu(!showMenu)}>
            Productos
          </a>
          <br />
          <a href="#nosotros" onClick={() => setShowMenu(!showMenu)}>
            Nosotros
          </a>
          <br />
          <a href="#sucursales" onClick={() => setShowMenu(!showMenu)}>
            Sucursales
          </a>
          <br />
          <a href="#contacto" onClick={() => setShowMenu(!showMenu)}>
            Contacto
          </a>
        </section>
      )}
      {/* Menú desplegable */}
      {showMenu && (
        <div
          className={style.Nav_dropdown}
          style={{ display: showButton ? "none" : "block" }}
        >
          {/* <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#sucursales">Sucursales</a>
          <a href="#contacto">Contacto</a> */}
        </div>
      )}
    </div>
  );
}
