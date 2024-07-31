import { Link } from 'react-router-dom';
import { priceGenerator, formatDollars } from '../../utils';
import styles from './subsearch.module.css';

export default function SubSearchResult({ data, handleHide }) {

  function ResultList({ data }) {
    return data.map(element => {
      return (
        <li
          className={styles.result}
          key={element.id}
        >
          <Link
            onClick={handleHide}
            to={`/games/${element.slug}`}
            className={styles.linkItem}
          >
            <div className={styles.resultBody} >
              <div className={styles.resultGroupOne}>
                <img
                  src={element.background_image}
                  alt={element.slug}
                  className={styles.img}
                />
                <div className={styles.nameWrapper}>
                  <h5>{element.name}</h5>
                  <p>release: {element.released}</p>
                </div>
              </div>
              <div className={styles.resultGroupTwo}>
                <p className={styles.rating}><span className={styles.star}>★</span>{element.rating}</p>
                <p>{formatDollars(priceGenerator(element.id, element.rating))}</p>
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
  )
}
