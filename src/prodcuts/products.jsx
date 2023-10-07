import products from "./productsJSON.JS";
import Paginate from "./paginate";
import style from "./products.module.css";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className={style.products_body}>
      <Paginate products={products} />
      <div>
        <Link to="alfajores">
          <h6>Alfajores</h6>
        </Link>
      </div>
      <div>
        <Link to="especialidades">
          <h6>especialidades</h6>
        </Link>
      </div>
      <div>
        <Link to="pan">
          <h6>pan</h6>
        </Link>
      </div>
    </div>
  );
}
