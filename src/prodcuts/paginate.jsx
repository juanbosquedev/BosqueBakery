import { useState } from "react";

export default function Paginate(producto) {
   const [count, setCount] = useState(0)
  // const total = array.length;
  // const pages = total / 2;
  // const perPage = array.slice
  // // let arr = await array;
  const handleIncrement = () => {
    if(count<= producto.producto.length-2){
     setCount(count + 1);}
  };

  const handleDecrement = () => {
    if(count> 0){
   setCount(count - 1);}
  };  return (
    <div>
      <div>
       <h1>{producto.producto[count].name}</h1>
      <img src={producto.producto[count].Img}></img>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button><br/>

      </div>

      <h1>hola</h1>
    </div>
  );
}
