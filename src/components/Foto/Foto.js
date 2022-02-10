import React from 'react';
import classes from './Foto.module.css';

const Foto = props => {
    return (
        <div className={classes['foto']}>
            <img src={props.src} alt=""/>
        </div>
    );
};

export default Foto;