// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/desarrollo-videojuegos">Desarrollo de Videojuegos</Link></li>
        {/* Agrega más enlaces para otras rutas */}
      </ul>
    </nav>
  );
};

export default Navbar;
