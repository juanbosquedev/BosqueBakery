import { useState } from "react";
import style from "./paginate.module.css";

export default function Paginate(producto) {
  const [count, setCount] = useState(0);
  // const total = array.length;
  // const pages = total / 2;
  // const perPage = array.slice
  // // let arr = await array;
  const handleIncrement = () => {
    if (count <= producto.producto.length - 2) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className={style.paginate_body}>
     
      <div className={style.paginate_content}>
        <h1>{producto.producto[count].name}</h1>
      <button onClick={handleDecrement}> &lt; </button>
        <img src={producto.producto[count].Img} className={style.paginate_image}></img>
      <button onClick={handleIncrement}> &gt; </button>
      </div>
 
    </div>
  );
}
