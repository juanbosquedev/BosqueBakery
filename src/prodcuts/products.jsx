import products from "./productsJSON.JS";
import Paginate from "./paginate";
import style from './products.module.css'

export default function Products() {
  let producto = products;
  return (
    <div className={style.products_body}>
      <Paginate producto={producto} />
    </div>
  );
}
