// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Agregado el componente Navbar
import DesarrolloVideojuegos from './components/DesarrolloVideojuegos';
import Desarrolloweb from './components/Desarrolloweb';
import Animacion3d from './components/Animacion3d';
import Arte3d from './components/Arte3d';
import Gamedesign from './components/GameDesign';
import Musica from './components/Musica';
import Art from './components/ObrasdeArte';
import Products from './components/ProductsMarca';
import { Container, Button } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar /> {/* Agregado el componente Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desarrollo-videojuegos" element={<DesarrolloVideojuegos />} />
        <Route path="/desarrolloweb" element={<Desarrolloweb />} />
        <Route path="/animacion-3d" element={<Animacion3d />} />
        <Route path="/arte-3d" element={<Arte3d />} />
        <Route path="/gamedesign" element={<Gamedesign />} />
        <Route path="/musica" element={<Musica />} />
        <Route path="/art" element={<Art />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <div>
        <h2 className="mb-3">Home</h2>
        <p className="lead">Bienvenido a la página de inicio.</p>
        <Button variant="primary" className="mt-2">
          Mi Botón
        </Button>
        {/* Agrega aquí más componentes según sea necesario */}
      </div>
    </Container>
  );
};

export default App;
