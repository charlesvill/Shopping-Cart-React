import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import SearchBar from "./searchbar/searchbar";

const NavBar = () => {


  return (
    <nav className={styles.nav}>
      <div className={"logoCont"}>
        <Link to={"/"}>
          <div className={"domainName"}>True North Games</div>
          <div className={"domainLogo"}></div>
        </Link>
      </div>
      <SearchBar />
      <div className={"cartCont"}>
        <Link to={"/cart"}>shopping cart</Link>
      </div>
    </nav>
  );
}

export default NavBar;
