import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "/src/assets/logo.png";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={`d-flex justify-content-between align-items-center p-4 ${styles.navBar}`}>
      <Link to={"/"}>
      <img src={logo} alt="Logo" className={`${styles.logo}`} />
      </Link>
      <div className="d-flex justify-content-between align-items-center mx-5">
        <Link to={"/"}>
          <button className={`${styles.navButton}`}>INICIO</button>
        </Link>
        <Link to={"/category/clubes"}>
          <button className={`${styles.navButton}`}>CAMISETAS DE CLUBES</button>
        </Link>
        <Link to={"/category/selecciones"}>
          <button className={`${styles.navButton}`}>CAMISETAS DE SELECCIONES</button>
        </Link>
      </div>
      <div className={`d-flex align-items-center ${styles.cartContainer}`}></div>
      <CartWidget />
    </nav>
  );
};