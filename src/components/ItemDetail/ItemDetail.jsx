import { ItemCount } from "../ItemCount/ItemCount"
import styles from "../Item/Item.module.css";

export const ItemDetail = ( {description, price, stock, name, img} ) => {

  const onAdd = (items) => { 
    alert(`Se agregaron ${items} al carrito`)
}

return (
  <div className={`${styles.cardContainer}`}>
    <div className={`${styles.card}`}>
      <div className="card-body ">
        <h5 className={`${styles.name}`}> {name}</h5>
        <img className={`${styles.img}`}src={img} alt="" />
        <p className={`${styles.description}`}> {description} </p>
        <p className={`${styles.price}`}>${price}</p>
        <ItemCount stock={stock} onAdd={onAdd} />
      </div>
    </div>
  </div>
)
}

