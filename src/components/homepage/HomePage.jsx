import { useState, useEffect } from "react";
import { mapFeatData, fetchData, shuffle } from "../utils";
import Carousel from "./carousel/imgcarousel.jsx";
import TopGames from "./topgames/topgames.jsx";
import LoadSpinner from "../loadspinner/loadspinner.jsx";
import styles from "./homepage.module.css";

const featUrl = `${import.meta.env.VITE_BASE_URL}/games/featured`;
const topUrl = `${import.meta.env.VITE_BASE_URL}/games/goat`;

console.log("proxy server url: ", featUrl);
const HomePage = () => {
  const [carouselData, setCarData] = useState(null);
  const [topData, setTopData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHomeData() {
      setLoading(true);
      const carouselFetch = await fetchData(featUrl);
      const topFetch = await fetchData(topUrl);
      setCarData(carouselFetch);
      setTopData(topFetch);
      console.dir(carouselFetch);
      console.dir(topFetch);
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
      {loading ? (
        <LoadSpinner clsName={".homePage"} />
      ) : (
        <>
          <Carousel data={carouselData} />
          <TopGames data={topData} />
        </>
      )}
    </div>
  );
};

export default HomePage;
