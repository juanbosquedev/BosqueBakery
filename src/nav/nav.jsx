import style from './nav.module.css'

export default function Nav() {
  return (
    <div className={style.Nav_main} id="Nav">
      <a href="#inicio">Inicio</a>
      <br />
      <a href="#productos">Productos</a>
      <br />
      <a href="#nosotros">Nosotros</a>
      <br />
      <a href="#sucursales">Sucursales</a>
      <br />
      <a href="#contacto">Contacto</a>
      <br />
    </div>
  );
}
