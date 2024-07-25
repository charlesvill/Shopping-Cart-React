import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './carousel.module.css';
import { Link } from 'react-router-dom';


export default function Carousel({ data }) {
  const [position, setPosition] = useState(0);
  const carouselItems = data.map(
    (element, index) =>
      <Link to={`/games/${element.slug}`} key={element.id}>
        <img
          className={
            index === position ?
              `${styles.carouselItem} ${styles.v}` :
              `${styles.carouselItem} ${styles.hidden}`
          }
          src={element.background_image}
          alt={element.slug}
          
        />
      </Link>
  );
  function handlePrev() {
    position === 0 ?
      setPosition(carouselItems.length - 1) :
      setPosition(position => position -= 1);
  }

  function handleNext() {
    position === carouselItems.length - 1 ?
      setPosition(0) :
      setPosition(position => position += 1);
  }

  return (
    <div className={styles.container}>
      <div className="frame">
        <div className="slider">
          {carouselItems}
        </div>
        <div className="navBtnWrapper">
          <div className="circleNav 1" data-index="1"></div>
        </div>
        <div className="navArrowCont">
          <button className={"button-prev"} onClick={handlePrev}>{"<"}</button>
          <button className={"button-next"} onClick={handleNext}>{">"}</button>
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array,
};


