import React from 'react';
import classes from './Contacto.module.css';


const Contacto = () => {
    
    return (
      
        <div className={classes.container}>
            <h1>Contact with us </h1>
            <div className="form-group">
                <label >Nombre y Apellido</label>
                < input id="nombre y apellido" type="nombre y apellido" className="form-control" />
                <label >Telefono</label>
                < input id="telefono" type="telefono" className="form-control" />
                <label >Email</label>
                < input id="email" type="email" className="form-control" />
            </div>
            <label >Consulta</label>
            <div className="form-group">
                <textarea className="from-control" id='textarea' rows="8" cols="130" maxLength="100"
                  minLength="3" placeholder='Escriba su consulta aqui'></textarea>
                
        </div>
        <div className="form-group">
                <button className="btn btn-info">Submit</button>
        </div>

        </div>
 );
};

export default Contacto;