import React from 'react';
import classes from './Navegacion.module.css';

const Navegacion = () => {
    return (
        <nav className={classes.nav}>
          <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/">Clases</a>
              </li>
              <li>
                <a href="/">Trainers</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
          </ul>
        </nav>
    );
};

export default Navegacion;