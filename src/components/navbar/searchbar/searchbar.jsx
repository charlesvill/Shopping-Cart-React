import { useEffect, useState } from 'react';
import { formatString, fetchData } from "../../utils";
import SubSearchResult from "../subsearchbox/subsearch";
import LoadSpinner from '../../loadspinner/loadspinner';
import styles from "./searchbar.module.css";


function ResultWrapper({ query, setLoading, loading, handleClose }) {
    return (
    <>
      {loading && <LoadSpinner diameter={15} />}
      <div className={styles.resultsGroup}>
            <SubSearchResult
              query={query}
              handleHide={handleClose}
              loading={loading}
              setLoading = {setLoading}
            />
      </div>
    </>
  )
}
// need to sort out where the use effect and fetch request will live
export default function SearchBar() {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }

  function handleInput(e) {
    setShow(true);
    setLoading(true);
    setQuery(formatString(e.target.value));
  }

  return (
    <div className={styles.searchCont}>
      <form className={styles.form}>
        <div className={styles.column}>
          <input
            type={"text"}
            placeholder={"Search Games"}
            value={query}
            onChange={handleInput}
            className={styles.input}
          />
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,4C13.09,4 16,6.91 16,10.5C16,12.12 15.41,13.6 14.43,14.73L20.08,20.38L19.37,21.09L13.72,15.44C12.59,16.41 11.11,17 9.5,17C5.91,17 3,14.09 3,10.5C3,6.91 5.91,4 9.5,4M9.5,5C6.46,5 4,7.46 4,10.5C4,13.54 6.46,16 9.5,16C12.54,16 15,13.54 15,10.5C15,7.46 12.54,5 9.5,5Z" /></svg>
          {show && <ResultWrapper query={query} setLoading={setLoading} loading={loading} handleClose={handleClose} />}
          {show && <button onClick={handleClose} className={styles.closeBtn}>X</button>}
        </div>
      </form>
    </div>
  )
}
