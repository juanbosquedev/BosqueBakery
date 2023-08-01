// Branches.js
import React from 'react';
import { Link } from 'react-router-dom';
import branches from './branchJSON';

function Branches() {
  console.log(branches.map((branch) => branch));
  return (
    <>
      <div>
        {branches?.map((branch) => (
          <h1 key={branch.name}>
            {branch.name}
            <br />
            {branch.adress}
            <br />
            {branch.adressLink &&
            <Link to={branch.adressLink}>
             <img src={branch.adressImg} alt={branch.name}/>
           
            </Link>}
          </h1>
        ))}
        <Link to="/home">Volver</Link>
      </div>
    </>
  );
}

export default Branches;
