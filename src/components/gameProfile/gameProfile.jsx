import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData, priceGenerator, formatDollars } from "../utils";
import LoadSpinner from "../loadspinner/loadspinner";
import styles from "./gameProfile.module.css";

export default function GameProfile() {
  const { gameId } = useParams();
  const [cart, setCart] = useOutletContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `${import.meta.env.VITE_BASE_URL}/games/${gameId}`;

  useEffect(() => {
    async function dataFetch() {
      setLoading(true);
      const response = await fetchData(url);
      setData(response[0]);
      setLoading(false);
      console.dir(response);
    }
    try {
      dataFetch();
    } catch (error) {
      throw new Error(error);
    }
  }, [url]);

  function handleAdd() {
    const found = (arr, value) => {
      return arr.some((element) => value === element.id);
    };

    if (!found(cart, data.id)) {
      setCart((cart) => [
        ...cart,
        {
          name: data.name,
          image: `https://images.igdb.com/igdb/image/upload/t_cover_big/${data?.cover?.image_id}.webp`,
          slug: data.slug,
          id: data.id,
          price: priceGenerator(data.id, Math.round(data.rating)),
        },
      ]);
    } else {
      console.log("cart item found, skipping add!");
    }
  }

  return (
    <>
      {loading ? (
        <LoadSpinner />
      ) : (
        <div className={styles.pageCont}>
          <h2>{data.name}</h2>
          <div className={styles.frame}>
            <img
              src={`https://images.igdb.com/igdb/image/upload/t_screenshot_huge_2x/${data?.screenshots[0]?.image_id}.webp`}
              alt={data.slug}
              className={styles.image}
            />
          </div>
          <p>
            <span className={styles.star}>★</span>
            {Math.round(data.rating)}
          </p>
          <p>{data.summary}</p>
          <div className={styles.genreCont}>
            <p>Genres:</p>
            {data.genres.map((element) => (
              <span className={styles.genre} key={element.id}>
                {element.name}
              </span>
            ))}
          </div>
          <p>
            {formatDollars(priceGenerator(data.id, Math.round(data.rating)))}
          </p>
          <button onClick={handleAdd} className={styles.addBtn}>
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
}
