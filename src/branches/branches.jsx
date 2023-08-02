import { Link } from "react-router-dom";
import branches from "./branchJSON.JS";
import style from "./branches.module.css";

function Branches() {
  return (
    <>
      
        {branches.map((branche) => (
          <div className={style.branche_body} key={branche.name}>

            <main className={style.branche_main}>
              {branche.name}
              <br />
              {branche.adress}
            </main>

            <div className={style.branche_map}>
              {branche.adressImg && (
                <Link to={branche.adressLink} target="_blank">
                  <img src={branche.adressImg} alt={branche.name} className={style.branche_map_img}/>
                  <br/>map
                </Link>
              )}
            </div>
          </div>
        ))}

        <Link to="/home">voler</Link>
     
    </>
  );
}

export default Branches;
