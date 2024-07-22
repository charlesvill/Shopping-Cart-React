import { useState, useEffect } from "react"
import { mapFeatData } from "../utils";
import Carousel from "../imgcarousel";

const featUrl = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2023-01-01,2024-07-20&ordering=-added&page_size=7`

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(featUrl, { mode: "cors" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        setData(response.results);
        console.dir(response.results);
      })
      .catch((error) => console.error('Fetch error:', error))
      .finally(() => {
        setLoading(false);
        console.dir(data);
      });
  }, []); // Make sure to include featUrl as a dependency if it can change



  return (

    <div>
      {
        loading ? <p>Loading....</p>
          : <Carousel data={data} />
      }
      {/* topgames */}
      <h1>Welcome to the home page!</h1>
    </div>
    // here will go the outlet to render children simultaneously
  )
}

export default HomePage;
