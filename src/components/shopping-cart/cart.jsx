import { Link, useOutletContext } from "react-router-dom";
import { formatDollars } from "../utils";
import styles from "./cart.module.css";

export default function ShoppingCart() {
  const [cart, setCart] = useOutletContext();
  const total = cart.reduce((acc, current) => acc + current.price, 0);

  function handleRemove(id) {
    setCart((cart) => {
      return cart.filter(item => item.id !== id);
    });
  }

  const cartList = cart.map(
    (element) => {
      return (
        <li className={styles.cartItem} key={element.id}>
          <div className={styles.sectionOne}>
            <div className={styles.frame}>
              <img
                src={element.image}
                alt={element.slug}
                className={styles.cartImg}
              />
            </div>
            <span>{element.name}</span>
          </div>
          <div className={styles.sectionTwo}>
            <span>{formatDollars(element.price)}</span>
            <button
              onClick={() => handleRemove(element.id)}
              className={styles.btn}
            >x</button>
          </div>
        </li>
      )
    }
  );

  return (
    <div className={styles.cartCont}>
      <h3>View your cart</h3>
      <div className={styles.listCont}>
        {cart.length === 0 ? (
          <>
            <h5>You havent added any games yet!</h5>
            <Link
              to={"/"}
              className={styles.homeLink}
            >Click here to find your next adventure!
            </Link>
          </>
        ) : (
          <>
            <ul className={styles.cartList}>
              {cartList}
            </ul>
            <hr className={styles.hRuler} />
            <div className={styles.priceCont}>
              <span className={styles.priceText}>Total: </span>
              <span className={styles.priceText}>{formatDollars(total)}</span>
            </div>
            <Link
              to={"/"}
              className={styles.homeLink}
            >
              <p>Keep Shopping</p>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

