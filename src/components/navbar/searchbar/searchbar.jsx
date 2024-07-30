import { useEffect, useState } from 'react';
import { formatString, fetchData } from "../../utils";
import SubSearchResult from "../subsearchbox/subsearch";
import LoadSpinner from '../../loadspinner/loadspinner';
import styles from "./searchbar.module.css";


function ResultWrapper({ query, setLoading, loading, handleClose }) {
  const [data, setData] = useState(null);
  const url = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${query}&ordering=-added&page_size=6`

  useEffect(() => {
    async function getQueryResults() {
      setLoading(true);
      const results = await fetchData(url);
      setData(results.results);
      setLoading(false);
      console.dir(results);
    }

    try {
      getQueryResults();
    } catch (error) {
      throw new Error(error);
    }
  }, [query]);
  return (
    <>
      {loading ? <LoadSpinner diameter={15} /> : (
        <legend>
          <div className={styles.resultsGroup}>
            {console.log(loading)}
            {console.log(data)}
            <SubSearchResult
              data={data}
              handleHide={handleClose}
            />
          </div>
        </legend>
      )}
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
    setQuery(e.target.value);
  }

  return (
    <div className={styles.searchCont}>
      <form>
        <div className={loading ? styles.row : styles.column}>
          <input
            type={"text"}
            placeholder={"Search Games"}
            value={query}
            onChange={handleInput}
          />
          {show && <ResultWrapper query={query} setLoading={setLoading} loading={loading} handleClose={handleClose} />}
          {show && <button onClick={handleClose} className={styles.closeBtn}>X</button>}
        </div>
      </form>
    </div>
  )
}
