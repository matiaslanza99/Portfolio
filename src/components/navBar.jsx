import React, { useState } from 'react';
import './navBar.style.css';

function NavBar() {
  const [menuState, setMenuState] = useState(false);

  function handleMenu() {
    setMenuState(!menuState);
  }

  return (
    <>
      {!menuState ? (
        <button className="abrir" onClick={handleMenu}>
          <img src="menu.svg" alt="sas" />
        </button>
      ) : (
        <>
        <nav>

          <button className="cerrar_menu" onClick={handleMenu}>
            <img src="close.svg" alt="sas" />
          </button>
          <ul className="nav-list">
            <li>
              <a href="#home">
                <span>Inicio</span>
                <img src="house.svg" alt="sas" />
              </a>
            </li>

            <li>
              <a href="#sobremi">
                <span>Sobre Mí</span>
                <img src="help.svg" alt="sas" />
              </a>
            </li>

            <li>
              <a href="#proyectos">
                <span>Proyectos</span>
                <img src="projects.svg" alt="sas" />
              </a>
            </li>

            <li>
              <a href="#contacto">
                <span>Contacto</span>
                <img src="email.svg" alt="sas" />
              </a>
            </li>
          </ul>
        </nav>
        </>
      )}
    </>
  );
}

export default NavBar;
