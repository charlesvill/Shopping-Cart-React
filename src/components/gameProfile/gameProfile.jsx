import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utils";

export default function GameProfile() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://api.rawg.io/api/games/${slug}?key=${import.meta.env.VITE_API_KEY}`

  
  useEffect(() => {
    async function dataFetch() {
      setLoading(true);
      const attempt = await fetchData(url);
      setData(attempt);
      setLoading(false);
    }
    try {
      dataFetch();
    } catch (error) {
      throw new Error(error)
    }
  }, []);


  return (
    <>
      <h2>Hello from the gameProfile!</h2>
      <p>The game we're searching for is: {slug}</p>
      <h4>Results:</h4>
      {loading ? <h6>Loading</h6> :
        <div>
          <h6>{data.name}</h6>
          <img src={data.background_image} alt={data.slug} />
          <p>{data.description_raw}</p>
        </div>
      }
    </>
  )
}
