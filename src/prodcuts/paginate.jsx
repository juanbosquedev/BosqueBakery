import { useState } from "react";
import style from "./paginate.module.css";

export default function Paginate({ producto }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count <= producto.length - 2) {
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
      {producto[count].Img && (
        <div className={style.paginate_content}>
          <h1>{producto[count].name}</h1>
          <div className={style.image_container}>
            <button
              onClick={handleDecrement}
              className={style.paginate_content_btn_prev}
            >
              &lt;
            </button>
            <img
              src={producto[count].Img}
              className={style.paginate_image}
            ></img>
            <button
              onClick={handleIncrement}
              className={style.paginate_content_btn_next}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
