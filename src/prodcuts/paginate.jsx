import { useState } from "react";
import products from "./productsJSON.JS";
export default function Paginate(array) {
   const [count, setCount] = useState(0)
  const total = array.length;
  const pages = total / 2;
  const perPage = array.slice
  let arr = array;
  return (
    <div>
      {arr}
   
      <h1>hola</h1>
    </div>
  );
}
