import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">Principal</Link>
      <br />
      <Link to="/about">Nosotros</Link>
      <br />
      <Link to="/sucursales">Sucursales</Link>
      <br />
      <Link to="/contacto">Contacto</Link>
      <br />
    </div>
  );
}
