
import style from './productCard.module.css'

export default function ProductCard({img, name}) {
    


  return (
<div>
<img src={img} className={style.paginate_image}></img> 
  <h1>{name}</h1>
</div>
  );
}
