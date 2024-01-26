// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DesarrolloVideojuegos from './components/DesarrolloVideojuegos';
import Desarrolloweb from './components/Desarrolloweb';
import Animacion3d from './components/Animacion3d';
import Arte3d from './components/Arte3d';
import Gamedesign from './components/GameDesign';
import Musica from './components/Musica';
import Art from './components/ObrasdeArte';
import Products from './components/ProductsMarca';
import { Container, Typography, Button } from '@mui/material';

function App() {
  return (
    <Router>
      <Navbar />
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
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <Typography variant="h2" mt={5}>
          Home
        </Typography>
        <Typography variant="body1">
          Bienvenido a la página de inicio.
        </Typography>
        <Button variant="contained" color="primary" mt={2}>
          Mi Botón
        </Button>
        {/* Agrega aquí más componentes de Material-UI según sea necesario */}
      </div>
    </Container>
  );
};

export default App;
