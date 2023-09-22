import { useState, useEffect } from "react";
import style from "./nav.module.css";
import logo from "../assets/logoBig.png";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [small, setSmall] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setShowMenu(false);
      setShowButton(true);
      setSmall(true);
    } else {
      setShowMenu(true);
      setShowButton(false);
      setSmall(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [small]);

  return (
    <div className={style.Nav} id="Nav">
      <img className={style.Nav_logo} src={logo} alt="logoBig" />
      {showButton && (
        <button
          className={style.Nav_button}
          onClick={() => {setShowButton(!showButton); setShowMenu(!showMenu)}}
        >
          Menú
        </button>
      )}
      {showMenu && (
        <section className={style.Nav_main}>
    <a href="#inicio" onClick={() => { small && setShowMenu(!showMenu); setShowButton(!showButton); }}>
  Inicio
</a>
<br />

          <a href="#productos" onClick={() => { small && setShowMenu(!showMenu); setShowButton(!showButton); }}>
            Productos
          </a>
          <br />
          <a href="#nosotros" onClick={() => { small && setShowMenu(!showMenu); setShowButton(!showButton); }}>
            Nosotros
          </a>
          <br />
          <a href="#sucursales" onClick={() => { small && setShowMenu(!showMenu); setShowButton(!showButton); }}>
            Sucursales
          </a>
          <br />
          <a href="#contacto" onClick={() => { small && setShowMenu(!showMenu); setShowButton(!showButton); }}>
            Contacto
          </a>
        </section>
      )}
      {showMenu && (
        <div
          className={style.Nav_dropdown}
          style={{ display: showMenu ? "none" : "block" }}
        ></div>
      )}
    </div>
  );
}
