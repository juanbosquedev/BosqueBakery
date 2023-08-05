import { Link } from "react-router-dom";
import style from './nav.module.css'

export default function Nav() {
  return (
    <div className={style.Nav_main}>
      <Link to="/">Inicio</Link>
      <br />
      <Link to="/products">Productos</Link>
      <br />
      <Link to="/about">Nosotros</Link>
      <br />
      <Link to="/sucursales">Sucursales</Link>
      <br />
      <Link to="contacto">Contacto</Link>
      <br />
    </div>
  );
}
