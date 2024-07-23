import { useState, useEffect } from "react";
import { mapFeatData, fetchData } from "../utils";
import Carousel from "./carousel/imgcarousel.jsx";
import TopGames from "./topgames/topgames.jsx";
import styles from "./homepage.module.css";

const featUrl = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2023-01-01,2024-07-20&ordering=-added&page_size=7`
const topUrl = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&ordering=-added&page_size=12`;

const HomePage = () => {
  const [carouselData, setCarData] = useState(null);
  const [topData, setTopData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHomeData() {
      setLoading(true);
      const carouselFetch = await fetchData(featUrl);
      const topFetch = await fetchData(topUrl);
      setCarData(mapFeatData(carouselFetch.results));
      setTopData(mapFeatData(topFetch.results));
      console.dir(carouselFetch.results);
      console.dir(topFetch.results);
      setLoading(false);
    }

    try {
      fetchHomeData();
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <div className={styles.homeCont}>
      {
        loading ? <p>Loading....</p> :
          <>
            <Carousel data={carouselData} />
            <TopGames data={topData} />
          </>
      }
      <h1>Welcome to the home page!</h1>
    </div>
    // here will go the outlet to render children simultaneously
  )
}

export default HomePage;
