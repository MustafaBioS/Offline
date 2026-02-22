import './App.css';
import FaultyTerminal from './components/FaultyTerminal';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import { useEffect, useState } from 'react';

function chosen(e) {
  const current = e.currentTarget;

  document.querySelectorAll(".nav-item").forEach(item => {
    if (item !== current) item.classList.remove('chosen');
  });

  current.classList.add('chosen');
}

export default function App() {

  const location = useLocation();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/me", { credentials: "include" })
      .then(res => {
        if (!res.ok) return null;
        return res.json();
      })
      .then(data => setUser(data))
      .catch(() => setUser(null));
  }, []);
  
  return (
    <>    
      <nav className="nvb">
        <Link to="/" className={location.pathname === "/" ? "home nav-item chosen" : "home nav-item"} onClick={chosen}>Home</Link>
        {user && (
        <Link to="/shop" className={location.pathname === "/shop" ? "shop nav-item chosen" : "shop nav-item"} onClick={chosen}>Shop</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {user && (
        <Route path="/shop" element={<Shop />} />
        )}
      </Routes>
    </>
  );
}
