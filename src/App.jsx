import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  console.log("MODE:", import.meta.env.MODE);
  console.log("API URL:", import.meta.env.VITE_API_URL);
  console.log("ALL ENV:", import.meta.env);
  return (
    <>
      <NavBar cart={cart} />
      <div className={"outletContainer"}>
        <Outlet context={[cart, setCart]} />
      </div>
      <Footer />
    </>
  );
}

export default App;
