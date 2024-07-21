import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
