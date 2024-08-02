import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData, priceGenerator, formatDollars } from "../utils";
import LoadSpinner from "../loadspinner/loadspinner";
import styles from "./gameProfile.module.css";

export default function GameProfile() {
  const { slug } = useParams();
  const [cart, setCart] = useOutletContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://api.rawg.io/api/games/${slug}?key=${import.meta.env.VITE_API_KEY}`

  useEffect(() => {
    async function dataFetch() {
      setLoading(true);
      const attempt = await fetchData(url);
      setData(attempt);
      setLoading(false);
      console.dir(attempt)
    }
    try {
      dataFetch();
    } catch (error) {
      throw new Error(error)
    }
  }, [slug]);

  function handleAdd() {
    const found = (arr, value) => {
      return arr.some(
        element => value === element.id
      );
    }

    if (!found(cart, data.id)) {
      setCart(cart => [...cart, {
        name: data.name,
        image: data.background_image,
        slug: data.slug,
        id: data.id,
        price: priceGenerator(data.id, data.rating),
      }]);
    } else {
      console.log("cart item found, skipping add!");
    }
  }

  return (
    <>
      {loading ? <LoadSpinner /> :
        <div className={styles.pageCont}>
          <h2>{data.name}</h2>
          <div className={styles.frame}>
            <img
              src={data.background_image_additional}
              alt={data.slug}
              className={styles.image}
            />
          </div>
          <p><span className={styles.star}>★</span>{data.rating}</p>
          <p>{data.description_raw}</p>
          <div className={styles.genreCont}>
            <p>Genres:</p>
            {data.genres.map(element => <span className={styles.genre} key={element.id}>{element.name}</span>)}
          </div>
          <p>{formatDollars(priceGenerator(data.id, data.rating))}</p>
          <button
            onClick={handleAdd}
            className={styles.addBtn}
          >Add to Cart</button>
        </div>
      }
    </>
  )
}
