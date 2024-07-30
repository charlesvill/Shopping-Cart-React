import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import SubSearchResult from "./subsearchbox/subsearch";
import { formatString } from "../utils";

const NavBar = () => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  function handleInput(e) {
    setShow(true);
    setQuery(e.target.value);
  }

  function hideResults() {
    setShow(false);
  }

  return (
    <nav className={styles.nav}>
      <div className={"logoCont"}>
        <Link to={"/"}>
          <div className={"domainName"}>True North Games</div>
          <div className={"domainLogo"}></div>
        </Link>
      </div>
      <div className={styles.searchCont}>
        <form>
          <input
            type={"text"}
            placeholder={"Search Games"}
            value={query}
            onChange={handleInput}
          />
        </form>
        {show && (
          <>
            <SubSearchResult query={formatString(query)} />
            <button 
              onClick={hideResults}
              className={styles.closeBtn}
            >X</button>
          </>
        )}
      </div>
      <div className={"cartCont"}>
        <Link to={"/cart"}>shopping cart</Link>
      </div>
    </nav>
  );
}

export default NavBar;
