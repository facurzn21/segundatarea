import React from 'react';
import Socials from '../Socials/Socials';
import classes from './Footer.module.css';

const Footer = () => {
    const anio = new Date().getFullYear();
    return (
        <div className={classes['footerContent']}>
            <h3>PowerFitness</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni
                si ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit e
                sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            
            {/* Se pasan los socials a un componente */}
            <Socials />

            <div className={classes['footerBottom']}>
                <p>copyright Todos los derechos reservados Facundo Correa {anio}</p>
            </div>
        </div>
    );
    
};

export default Footer;