import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" className="navBar fixed-top">
        <Nav className="navBar-box">
          <Nav.Link className="navBar-option" href="#home">Home</Nav.Link>
          <Nav.Link className="navBar-option" href="#sobremi">Sobre Mí</Nav.Link>
          <Nav.Link className="navBar-option" href="#proyectos">Proyectos</Nav.Link>
          <Nav.Link className="navBar-option" href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar>
  );
}

export default NavBar;