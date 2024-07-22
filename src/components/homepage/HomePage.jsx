import { useState, useEffect } from "react"
import { mapFeatData, fetchData } from "../utils";
import Carousel from "../imgcarousel";

const featUrl = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2023-01-01,2024-07-20&ordering=-added&page_size=7`
const topUrl = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&ordering=-added&page_size=12`;

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCarouselData() {
      setLoading(true);
      const fetchAttempt = await fetchData(featUrl);
      setData(fetchAttempt.results);
      setLoading(false);
    }
    try {
      fetchCarouselData();
    } catch (error) {
      throw new Error(error);
    } 
  }, []);

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
