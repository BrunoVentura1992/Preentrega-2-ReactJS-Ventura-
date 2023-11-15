import { useState } from "react";
import styles from "./Itemcount.module.css"

export const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className={`${styles.border}`}>
      <div>
      <button className={`${styles.buttonDec}`} onClick={decrement}>
          -
        </button>
        <strong>{count}</strong>
        <button className={`${styles.buttonInc}`} onClick={increment}>
          +
        </button>
      </div>
      <button className={`${styles.buttonAdd}`} onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
    </div>
  );
};