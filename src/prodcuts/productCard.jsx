
import style from './productCard.module.css'

export default function ProductCard({img, name}) {
    


  return (
<div>
  <h1>{name}</h1>
<img src={img} className={style.paginate_image}></img> 
</div>
  );
}
