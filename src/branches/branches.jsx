import { Link } from "react-router-dom";

function Branches() {
  return (
    <>
      <div>
        <h1>
          O HIGGINS B° CABAÑA DEL PILAR
          <br />
          LOPEZ CABRERA B° CERVECEROS
          <br />
          CELSO BARRIOS B° JARDÍN DEL SUR
          <br />
          NOMBRE B° CERVECEROS ANEXO
          <br />
        </h1>
        <Link to="/home">voler</Link>
      </div>
    </>
  );
}

export default Branches;
