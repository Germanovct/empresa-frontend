// Navbar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Empresa
        </Typography>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/" onClick={handleMenuClose}>
            Inicio
          </MenuItem>
          <MenuItem component={Link} to="/desarrollo-videojuegos" onClick={handleMenuClose}>
            Desarrollo de Videojuegos
          </MenuItem>
          <MenuItem component={Link} to="/desarrolloweb" onClick={handleMenuClose}>
            Desarrollo Web
          </MenuItem>
          <MenuItem component={Link} to="/animacion-3d" onClick={handleMenuClose}>
            Animación 3D
          </MenuItem>
          <MenuItem component={Link} to="/arte-3d" onClick={handleMenuClose}>
            Arte 3D
          </MenuItem>
          <MenuItem component={Link} to="/gamedesign" onClick={handleMenuClose}>
            Game Design
          </MenuItem>
          <MenuItem component={Link} to="/musica" onClick={handleMenuClose}>
            Música
          </MenuItem>
          <MenuItem component={Link} to="/art" onClick={handleMenuClose}>
            Obras de Arte
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
            Productos de Marca
          </MenuItem>
          {/* Agrega más elementos de menú para otros servicios */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
