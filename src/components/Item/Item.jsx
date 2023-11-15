import { Link } from "react-router-dom";
import styles from "./Item.module.css"

export const Item = ({ id, name, img, description }) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`${styles.card}`}>
        <div className="card-body ">
          <h5 className={`${styles.name}`}> {name}</h5>
          <img className={`${styles.img}`} src={img} alt="" />
          <p className={`${styles.description}`}> {description} </p>
          <Link to={`/item/${id}`}>
            <button className={`${styles.button}`}>DETALLES</button>
          </Link>
        </div>
      </div>
    </div>
  );
};