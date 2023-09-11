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

  return (
    <div className={style.paginate_body}>
      <div className={style.paginate_content}>
        {/* <h1>{products[count].Img && products[count].name}</h1> */}
        <div className={style.image_container}>
          <button
            onClick={handleDecrement}
            className={style.paginate_content_btn_prev}
          >
            &lt;
          </button>
          <ProductCard img={products[count].Img} name={products[count].name} />
          {/* <img src={products[count].Img} className={style.paginate_image}></img> */}
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
