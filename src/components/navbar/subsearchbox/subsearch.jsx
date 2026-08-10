import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { priceGenerator, formatDollars, fetchData } from "../../utils";
import styles from "./subsearch.module.css";
import key from "../../authorization/key.js";

export default function SubSearchResult({
  query,
  handleHide,
  loading,
  setLoading,
}) {
  const [data, setData] = useState(null);
  const url = `${import.meta.env.BASE_URL}/search?=${query}/`;

  useEffect(() => {
    async function getQueryResults() {
      setLoading(true);
      const results = await fetchData(url);
      setData(results);
      setLoading(false);
      console.dir(results);
    }

    try {
      getQueryResults();
    } catch (error) {
      throw new Error(error);
    }
  }, [query]);

  function ResultList({ data }) {
    if (data === undefined || data === null) {
      return <p>Loading...</p>;
    }
    return data.map((element) => {
      return (
        <li className={styles.result} key={element.id}>
          <Link
            onClick={handleHide}
            to={`/games/${element.slug}`}
            className={styles.linkItem}
          >
            <div className={styles.resultBody}>
              <div className={styles.resultGroupOne}>
                <div className={styles.imgWrapper}>
                  <img
                    src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${element.cover.image_id}.jpg`}
                    alt={element.slug}
                    className={styles.img}
                  />
                </div>
                <div className={styles.nameWrapper}>
                  <h5>{element.name}</h5>
                  <p>release: {element.first_release_date}</p>
                </div>
              </div>
              <div className={styles.resultGroupTwo}>
                <p className={styles.rating}>
                  <span className={styles.star}>★</span>
                  {element.rating}
                </p>
                <p>
                  {formatDollars(priceGenerator(element.id, element.rating))}
                </p>
              </div>
            </div>
          </Link>
        </li>
      );
    });
  }

  return (
    <div className={styles.resultBox}>
      <ul className={styles.dropDown}>{<ResultList data={data} />}</ul>
    </div>
  );
}
