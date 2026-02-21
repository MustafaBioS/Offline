import './App.css';
import FaultyTerminal from './components/FaultyTerminal';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from './Home.jsx';
import Shop from './Shop.jsx';

function chosen(e) {
  const current = e.currentTarget;

  document.querySelectorAll(".nav-item").forEach(item => {
    if (item !== current) item.classList.remove('chosen');
  });

  current.classList.add('chosen');
}

export default function App() {

  const location = useLocation();

  return (
    <>
      <nav className="nvb">
        <Link to="/" className={location.pathname === "/" ? "home nav-item chosen" : "home nav-item"} onClick={chosen}>Home</Link>
        <Link to="/shop" className={location.pathname === "/shop" ? "shop nav-item chosen" : "shop nav-item"} onClick={chosen}>Shop</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}
