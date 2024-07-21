import {useState, useEffect} from "react"

const featUrl = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2023-01-01,2024-07-20&ordering=-added&page_size=7`


const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
      fetch(featUrl, {mode: "cors"})
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.error(error))
      .then(console.table(data));
  }, []);

  return (
    <div>
      <h1>Welcome to the home page!</h1>
    </div>
    // here will go the outlet to render children simultaneously
  )
}

export default HomePage;
