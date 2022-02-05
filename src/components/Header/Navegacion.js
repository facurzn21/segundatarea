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