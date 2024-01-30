import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono adecuado

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/public/logo192.png" alt="React Logo" height="30" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/desarrollo-videojuegos">
              Desarrollo de Videojuegos
            </Link>
            <Link className="nav-link" to="/desarrolloweb">
              Desarrollo Web
            </Link>
            <Link className="nav-link" to="/animacion-3d">
              Animación 3D
            </Link>
            <Link className="nav-link" to="/arte-3d">
              Arte 3D
            </Link>
            <Link className="nav-link" to="/gamedesign">
              Game Design
            </Link>
            <Link className="nav-link" to="/musica">
              Música
            </Link>
            <Link className="nav-link" to="/art">
              Obras de Arte
            </Link>
            <Link className="nav-link" to="/products">
              Productos
            </Link>
            <Link className="nav-link" to="/login">
              <FontAwesomeIcon icon={faUser} /> {/* Actualizado al ícono de usuario */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
