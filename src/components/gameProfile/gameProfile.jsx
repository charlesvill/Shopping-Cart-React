import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData, priceGenerator, formatDollars } from "../utils";

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
      console.dir(attempt.id)
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
      <h2>Hello from the gameProfile!</h2>
      <p>The game we're searching for is: {slug}</p>
      <h4>Results:</h4>
      {loading ? <h6>Loading</h6> :
        <div>
          <h6>{data.name}</h6>
          <img src={data.background_image_additional} alt={data.slug} />
          <p>★{data.rating}</p>
          <p>{data.description_raw}</p>
          <p>{formatDollars(priceGenerator(data.id, data.rating))}</p>
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
      }
    </>
  )
}
