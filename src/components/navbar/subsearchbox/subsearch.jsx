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
          >
            <div className={styles.resultBody} >
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
      <div className={styles.resultBox}>
              <ul id={'dropDown'}>{<ResultList data={data} />}</ul>
      </div>
  )
}
