import { useState, useEffect } from 'react';
import { Link, useOutletContext } from "react-router-dom";
import styles from "./navbar.module.css";
import SearchBar from "./searchbar/searchbar";

function CartNotification({ length }) {
  return (
    <div className={styles.cartNotification}>
      <span>{length}</span>
    </div>
  )
}
const NavBar = ({ cart }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 1000);
      return () => clearTimeout(timer);
  }, [cart]);

  return (
    <nav className={styles.nav}>
      <Link to={"/"} className={styles.logoCont}>
        <div className={styles.domainTitle}>True North Games</div>
        <svg className={styles.domainLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>compass-rose</title><path d="M15 9L12 0L9 9L0 12L9 15L12 24L15 15L24 12L15 9M4 12L10 10L11 12H4M12 20L10 14L12 13V20M12 4L14 10L12 11V4M14 14L13 12H20L14 14M8.7 17.3L5 19L6.7 15.3L8.3 15.8L8.7 17.3M17.3 15.3L19 19L15.3 17.3L15.8 15.7L17.3 15.3M6.7 8.7L5 5L8.7 6.7L8.2 8.2L6.7 8.7M15.3 6.7L19 5L17.3 8.7L15.7 8.2L15.3 6.7Z" /></svg>
      </Link>
      <SearchBar />
      <div className={styles.cartCont}>
        <Link to={"/cart"}>
          <div className={`${styles.cartNotWrapper} ${animate ? styles.animationPlay : ""}`}>
            {
              cart.length > 0 && <CartNotification length={cart.length} />
            }
          </div>
          <svg className={styles.cartIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
