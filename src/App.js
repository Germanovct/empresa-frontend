// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DesarrolloVideojuegos from './components/DesarrolloVideojuegos';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desarrollo-videojuegos" element={<DesarrolloVideojuegos />} /> 
      </Routes>
    </Router>
  );
}


const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Bienvenido a la página de inicio.</p>
    </div>
  );
};

export default App;
