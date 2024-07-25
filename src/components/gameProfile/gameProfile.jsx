import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData, priceGenerator, formatDollars } from "../utils";


export default function GameProfile() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://api.rawg.io/api/games/${slug}?key=${import.meta.env.VITE_API_KEY}`
  let price = 0;
  
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
  }, []);

  function handleAdd(){
    // state being set in the parent component, in app? 
    // create obj with name,slug,id, price sent to appropriate state
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
