import PropTypes from 'prop-types';
import styles from './topgames.module.css';
import { priceGenerator } from '../../utils.jsx';
import { Link } from 'react-router-dom';

export default function TopGames({ data }) {
  const gamesList = data.map(
    (element) =>
      <div className={styles.game}>
        <Link to={`/games/${element.slug}`}>
          <img
            className={styles.image}
            src={element.background_image}
            alt={element.slug}
            key={element.id}
          />
          <p><span className={styles.star}>★</span>{element.rating}</p>
          <div>
            <h3>{element.name}</h3>
            <p className={styles.price}>${priceGenerator(element.id, element.rating)}</p>
          </div>
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
