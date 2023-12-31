import style from "./paginate.module.css";
import { useState } from "react";
import ProductCard from "./productCard";

export default function Paginate({ products }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count <= products.length - 2) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
   const render =  <ProductCard img={products[count].Img} name={products[count].name} />
         
  return (
    <div className={style.paginate_body}>
      <div className={style.paginate_content}>
       <div className={style.image_container}>
          <button
            onClick={handleDecrement}
            className={style.paginate_content_btn_prev}
          >
            &lt;
          </button>
          {render}
          <button
            onClick={handleIncrement}
            className={style.paginate_content_btn_next}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
