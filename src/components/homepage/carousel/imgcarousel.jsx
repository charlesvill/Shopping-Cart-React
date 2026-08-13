import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./carousel.module.css";
import { Link } from "react-router-dom";

export default function Carousel({ data }) {
  const [position, setPosition] = useState(0);
  const carouselItems = data.map((element, index) => (
      <Link
  to={`/games/${element.slug}`}
  key={element.id}
  className={
    index === position
      ? `${styles.linkCont} ${styles.v}`
      : `${styles.linkCont} ${styles.hidden}`
  }
>
  {/* Main wallpaper */}
  <div className={styles.wallpaperContainer}>
    <img
      className={styles.carouselItem}
      src={`https://images.igdb.com/igdb/image/upload/t_screenshot_huge/${element?.artworks[0]?.image_id}.jpg`}
      alt={element.name}
    />

    {/* Text overlay */}
    <div className={styles.overlayWrapper}>
      <div className={styles.overlayFilm}></div>

      <div className={styles.overlayContent}>
        <p className={styles.overlayTitle}>{element.name}</p>

        <p>
          {Math.round(element.rating)}% of players rate{" "}
          <em>Recommended or Exceptional</em>
        </p>
      </div>
    </div>
  </div>

  {/* Screenshot panel */}
  <div className={styles.rightOverlayWrapper}>
    {/* Blurred copy of wallpaper */}
    <img
      className={styles.rightBackground}
      src={`https://images.igdb.com/igdb/image/upload/t_screenshot_huge/${element?.artworks[0]?.image_id}.jpg`}
      alt=""
    />

    <div className={styles.rightOverlayContent}>
      {element.screenshots.slice(0, 4).map((image) => (
        <img
          className={styles.screenshotImg}
          key={image.id}
          src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${image.image_id}.jpg`}
          alt=""
        />
      ))}
    </div>
  </div>
</Link>
      ));
  function handlePrev() {
    position === 0
      ? setPosition(carouselItems.length - 1)
      : setPosition((position) => (position -= 1));
  }

  function handleNext() {
    position === carouselItems.length - 1
      ? setPosition(0)
      : setPosition((position) => (position += 1));
  }

  return (
    <div className={styles.container}>
      <div className="frame">
        <div className={styles.slider}>{carouselItems}</div>
        <div className={styles.navArrowCont}>
          <button className={"button-prev"} onClick={handlePrev}>
            {"<"}
          </button>
          <button className={"button-next"} onClick={handleNext}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array,
};
