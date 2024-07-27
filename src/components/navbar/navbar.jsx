import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const tempFn = (e) => {
  e.preventDefault();

  console.log("this is submitting a search");
}


const NavBar = () => {
  const [query, setQuery] = useState(null);

  function handleInput(e) {
    setQuery(e.target.value);
  }

  function SubSearchResult({ data }) {
    return (
      <>
        <div className={styles.resultBox}>
          <p>{data}</p>
        </div>
      </>
    )
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
        {query && <SubSearchResult data={query}/>}
      </div>
      <div className={"cartCont"}>
        <Link to={"/cart"}>shopping cart</Link>
      </div>
    </nav>
  );
}

export default NavBar;
