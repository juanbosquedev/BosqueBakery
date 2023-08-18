import { Link } from "react-router-dom";
import branches from "./branchJSON.JS";
import style from "./branches.module.css";

function Branches() {
  return (
    <div id="sucursales">
      {branches.map((branche) => (
        <div className={style.branche} key={branche.name}>
          <div className={style.branche_body}>
            <main className={style.branche_main}>
              {branche.name}
              <br />
              {branche.adress}
            </main>

            <div className={style.branche_map}>
              {branche.adressImg && (
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
                  {/* <br /> */}
                  map
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      <a href="#home" className={style.branche_comeBack_button}>
        voler
      </a>
    </div>
  );
}

export default Branches;
