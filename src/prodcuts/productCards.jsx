import products from "./productsJSON.JS";
import Paginate from "./paginate";
import style from "./productCards.module.css";
export default function ProductsCards() {


  return (
    <div id="productos" className={style.productCard_body}>
     <Paginate producto={products}/>
      {/* {products &&
        products.map((product) => {
          return (
            <div key={product.name} className={style.productCard_img_body}>
              <h6 >{product.name}</h6>
              <img
                src={product.Img}
                alt="producto"
                className={style.productCard_img}
              />
            </div>
          );
        })} */}
    </div>
  );
}
