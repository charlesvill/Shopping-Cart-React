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
          <div>
            <span>{element.name}</span>
            <span>{formatDollars(element.price)}</span>
          </div>
          <button onClick={() => handleRemove(element.id)}>Remove</button>
        </li>
      )
    }
  );

  return (
    <>
      <h3>Welcome from the shopping cart!</h3>
      <ul className={styles.cartCont}>
        {cartList}
      </ul>
      <section>
        <h3>Total: </h3>
        <span>{formatDollars(total)}</span>
      </section>

      <Link to={"/"}>Back to home</Link>
    </>
  )
}

