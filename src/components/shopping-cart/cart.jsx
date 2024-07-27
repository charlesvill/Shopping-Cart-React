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
          <img
            src={element.image}
            alt={element.slug}
            className={styles.cartImg}
          />
          <div className={styles.sectionTwo}>
            <div>
              <span>{element.name}</span>
              <span>{formatDollars(element.price)}</span>
            </div>
            <button
              onClick={() => handleRemove(element.id)}
              className={styles.btn}
            >Remove</button>
          </div>
        </li>
      )
    }
  );

  return (
    <>
      <h3>View your cart</h3>
      {cart.length === 0 ? (
        <div>
          <h5>You havent added any games yet!</h5>
          <Link to={"/"}>Click here to find your next adventure!</Link>
        </div>
      ) : (
        <div>
          <ul className={styles.cartCont}>
            {cartList}
          </ul>
          <section>
            <h3>Total: </h3>
            <span>{formatDollars(total)}</span>
          </section>
          <Link to={"/"}>Back to home</Link>
        </div>
      )}
    </>
  )
}

