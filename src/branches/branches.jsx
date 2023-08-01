import { Link } from "react-router-dom";
import branches from "./branchJSON.JS";

function Branches() {
  console.log(branches.map((branche) => branche));
  return (
    <>
      <div>
        {branches.map((branche) => (
          <h1 key={branche.name}>
            {branche.name}
            <br />
            {branche.adress}
            <br />
            {branche.adressImg && (
              <Link to={branche.adressLink}>
                <img src={branche.adressImg} alt={branche.name} />
              </Link>
            )}
          </h1>
        ))}

        <Link to="/home">voler</Link>
      </div>
    </>
  );
}

export default Branches;
