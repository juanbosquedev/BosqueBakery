import style from "./nav.module.css";
import logo from "../assets/logoBig.png";

export default function Nav() {
  return (
    <div className={style.Nav} id="Nav">
      <img className={style.Nav_logo} src={logo} alt="logoBig" />
      <section className={style.Nav_main}>
        <a href="#inicio">Inicio</a>
        <br />
        <a href="#productos">Productos</a>
        <br />
        <a href="#nosotros">Nosotros</a>
        <br />
        <a href="#sucursales">Sucursales</a>
        <br />
        <a href="#contacto">Contacto</a>
      </section>
    </div>
  );
}
