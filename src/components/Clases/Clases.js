import React from 'react';
import Galeria from '../Galeria/Galeria';
import Tabla from '../Tabla/Tabla';

const myStyle = {
    textAlign: 'center',
    fontSize: '40px',
    fontSize: 'italic'
};

const Clases = props => {
    return (
        <div style={{paddingTop: '120px'}}>
            <h2 style={myStyle}>AMAZING CLASES</h2>
            <Tabla />
            <Galeria />
        </div>
    );
};

export default Clases;