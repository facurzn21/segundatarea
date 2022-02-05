import React from 'react';
import Navegacion from './Navegacion';
import classes from './Header.module.css';

const Header = props => {
    return (
        <header className={classes['header']}>
            <h1>Power Fitness</h1>
            <Navegacion />
        </header>
    );
    
};

export default Header;