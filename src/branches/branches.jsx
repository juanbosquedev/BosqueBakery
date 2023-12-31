import { Link } from "react-router-dom";
import branches from "./branchJSON.JS";
import style from "./branches.module.css";

function Branches() {
  return (
    <div id="sucursales">
      {branches &&
        branches.map((branche) => (
          <div className={style.branche} key={branche.name}>
            <div className={style.branche_body}>
              <main className={style.branche_main}>
                <h3>{branche.name}</h3>
                <h1> {branche.adress}</h1>
              </main>

              <div className={style.branche_map}>
                <Link
                  to={branche.adressLink}
                  target="_blank"
                  className={style.branche_link}
                >
                  <img
                    src={branche.adressImg}
                    alt={branche.name}
                    className={style.branche_map_img}
                  />
                  map
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Branches;
