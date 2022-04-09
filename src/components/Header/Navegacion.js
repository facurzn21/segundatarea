import React from 'react';
import classes from './Navegacion.module.css';

const Navegacion = () => {
    return (
        <nav className={classes.nav}>
          <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="clases">Clases</a>
              </li>
              <li>
                <a href="trainers">Trainers</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
              <li>
                <a href="login">Login</a>
              </li>
              <li>
                <a href="registro">Registrarse</a>
              </li>
          </ul>
        </nav>
    );
};

export default Navegacion;