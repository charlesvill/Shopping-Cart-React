import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import SubSearchResult from "./subsearchbox/subsearch";

const tempFn = (e) => {
  e.preventDefault();

  console.log("this is submitting a search");
}


const NavBar = () => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  function handleInput(e) {
    setShow(true);
    setQuery(e.target.value);
  }
  function hideResults() {
    console.log("should be hidden rn");
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
        {/* make the on submit to call the search component */}
        <form onSubmit={tempFn}>
          {/* need an on change to handle the preview */}
          <input
            type={"text"}
            placeholder={"Search Games"}
            value={query}
            onChange={handleInput}
          />
        </form>
        {show && (
          <>
            <SubSearchResult query={query} />
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
