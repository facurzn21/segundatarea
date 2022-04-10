import React from 'react';
import classes from './Contacto.module.css';


const Contacto = () => {
    return (
      
        <div className={classes.container}>
            <h1>Contact with us </h1>
            <div className="form-group">
                <label for="nombre y apeillo">Nombre y Apellido</label>
                < input id="nombre y apellido" type="nombre y apellido" class="form-control" />
                <label for="telefono">Telefono</label>
                < input id="telefono" type="telefono" class="form-control" />
                <label for="email">Email</label>
                < input id="email" type="email" class="form-control" />
            </div>
            <label for="consulta">Consulta</label>
            <div className="form-group">
                <textarea class="textarea" id='textarea' rows="8 " cols="150" maxLength="100"
                  minLength="3" placeholder='Escriba su consulta aqui'></textarea>
                
        </div>
        <div className="form-group">
                <button className="btn btn-info">Submit</button>
        </div>

        </div>
 );
};

export default Contacto;