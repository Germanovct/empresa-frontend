// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            <img src="/public/logo192.png" alt="React Logo" height="30" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/desarrollo-videojuegos">Desarrollo de Videojuegos</Link>
            <Link className="nav-link" to="/desarrolloweb">Desarrollo Web</Link>
            <Link className="nav-link" to="/arte-3d">Arte 3D</Link>
            <Link className="nav-link" to="/animacion-3d">Animación 3D</Link>
            <Link className="nav-link" to="/gamedesign">Game Design</Link>
            <Link className="nav-link" to="/art">Obras de Arte</Link>
            <Link className="nav-link" to="/products">Productos</Link>
            {/* Agrega más enlaces según sea necesario */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
