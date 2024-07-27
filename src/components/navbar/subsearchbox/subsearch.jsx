import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatString, fetchData, priceGenerator, formatDollars } from '../../utils';
import styles from './subsearch.module.css';

export default function SubSearchResult({ query }) {
  const [loading, setLoading] = useState(true);
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
  }, [query])

  function SearchList({data}) {
    return data.map(element => {
      return (
        <li
          className={styles.result}
          key={element.id}
        >
          <Link to={`/games/${element.slug}`}>
            <div className={styles.resultBody}>
              <img
                src={element.background_image}
                alt={element.slug}
                className={styles.img}
              />
              <h6>{element.name}</h6>
              <p>{element.rating}</p>
              <p>{formatDollars(priceGenerator(element.id, element.rating))}</p>
            </div>
          </Link>
        </li>
      );
    });
  }

  return (
    <>
      <div className={styles.resultBox}>
        {
          loading ? <h5>Loading...</h5> : (
            <ul>{<SearchList data={data} />}</ul>
          )
        }
      </div>
    </>
  )
}
