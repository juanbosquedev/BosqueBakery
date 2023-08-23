import products from "./branchJSON.JS";
export default function ProductsCards() {
    return (
      <div id="productos">
        <h6>{products[0].name}</h6>
      <img src={products[0].Img} alt='producto'/>
      </div>
    );
  }
  