import React from 'react';
import Galeria from '../Galeria/Galeria';
import Tabla from '../Tabla/Tabla';

const myStyle = {
    textAlign: 'center',
    fontSize: '40px',
    fontStyle: 'italic',
};

const Clases = props => {
    return (
        // utilizo dos tipos de estilos, lineal y como constante ya inicializada
        <div style={{paddingTop: '120px'}}>
            <h2 style={myStyle}>AMAZING CLASES</h2>
            {/* Ahora solo en la pagina solo llamo a los componentes que necesito usar */}
            <Tabla />
            <Galeria />
        </div>
    );
};

export default Clases;