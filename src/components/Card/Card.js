import React from 'react';
import classes from './Card.module.css';

const Card = props => {
    return (
        <div className={classes.contenedortarjetas}>
            {/* agrego todos los estilos de tarjeta => a, h3, p de una*/}
            <div className={classes['tarjeta']}>
                {/* <img src="" alt={props.title} /> */}
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem culpa </p>
                <a href='/'>READ MORE</a>   
            </div>
        </div>
         
    );
};

export default Card;