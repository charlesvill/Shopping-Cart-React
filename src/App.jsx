import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import './App.css'
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar />
      <Outlet context={[cart, setCart]} />
      <Footer />
    </>
  );
}

export default App;
