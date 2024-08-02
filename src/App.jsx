import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

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
