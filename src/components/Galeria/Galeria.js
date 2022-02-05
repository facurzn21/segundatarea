import React from 'react';
import Foto from '../Foto/Foto';
import classes from './Galeria.module.css';
import foto1 from '../../assets/gal1.jpg';
import foto2 from '../../assets/gal2.jpg';
import foto3 from '../../assets/gal3.jpg';
import foto4 from '../../assets/gal4.jpg';
import foto5 from '../../assets/gal5.jpg';
import foto6 from '../../assets/gal6.jpg';
import foto7 from '../../assets/gal-7.jpg';
import foto8 from '../../assets/gal-8.jpg';

const Galeria = () => {
    return (
        <div className={classes.galeria}>
            <Foto src={foto1} />
            <Foto src={foto2} />
            <Foto src={foto3} />
            <Foto src={foto4} />
            <Foto src={foto5} />
            <Foto src={foto6} />
            <Foto src={foto7} />
            <Foto src={foto8} />
        </div>
    );
};

export default Galeria;