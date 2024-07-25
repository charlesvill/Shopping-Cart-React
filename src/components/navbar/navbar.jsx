import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const tempFn = (e) => {
  e.preventDefault();

  console.log("this is submitting a search");
}

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={"logoCont"}>
        <Link to={"/"}>
          <div className={"domainName"}>True North Games</div>
          <div className={"domainLogo"}></div>
        </Link>
      </div>
      <div className={"searchCont"}>
        {/* make the on submit to call the search component */}
        <form onSubmit={tempFn}>
          {/* need an on change to handle the preview */}
          <input type={"text"} placeholder={"Search Games"} />
        </form>
      </div>
      <div className={"cartCont"}>
        <Link to={"/cart"}>shopping cart</Link>
      </div>
    </nav>
  );
}

export default NavBar;
