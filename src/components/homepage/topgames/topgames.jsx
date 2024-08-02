import PropTypes from 'prop-types';
import styles from './topgames.module.css';
import { priceGenerator, formatDollars } from '../../utils.jsx';
import { Link } from 'react-router-dom';

export default function TopGames({ data }) {
  const gamesList = data.map(
    (element) =>
      <div className={styles.game} key={element.id}>
        <Link
          to={`/games/${element.slug}`}
          className={styles.linkCont}
        >
          <div className={styles.frame}>
            <img
              className={styles.image}
              src={element.background_image}
              alt={element.slug}
            />
          </div>
          <div>
            <p><span className={styles.star}>★</span>{element.rating}</p>
            <h4>{element.name}</h4>
          </div>
          <p className={styles.price}>{formatDollars(priceGenerator(element.id, element.rating))}</p>
        </Link>
      </div>
  );
  return (
    <>
      <h2>Must Play Games</h2>
      <div className={styles.container}>
        {gamesList}
      </div>
    </>
  );
}

TopGames.propTypes = {
  data: PropTypes.array,
}
