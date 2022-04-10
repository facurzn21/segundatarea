import React, { useEffect, useState } from 'react';
import classes from './Registro.module.css';
import axios from 'axios';


const Registro = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [valor, setearValor] = useState(valorInicial);

    //evito cargar cosas antes que se renderizen
    const submitHandler = (event) => {
        try {
            
            event.preventDefault();
            const url = 'localhost:3000/api/user/signup';
            const data = { email: email, password: password};
            axios.post(url, data)
                .then((res) => {  
                    console.log(res);
                }).catch(err => alert(err));
            } catch (error) {
                alert(error);   
            }
        
    };
    const emailHandler = (event) => {
        setEmail(event.target.value);
    };
    const passHandler = (event) => {
        setPassword(event.target.value);

    };
    
    return (
      
        <div className={classes.container}> 
            <form onSubmit={submitHandler}>
                <h1>Registrarse</h1>
                <div className="form-group">
                    <label>Nombre y Apellido</label>
                    <input id="nombre y apellido" type="nombre y apellido" className="form-control" />
                    <label>Email</label>
                    <input id="email" type="email" className="form-control" onChange={emailHandler} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input id="password2" type="password" className="form-control" onChange={passHandler} />
                    <label>Repeat your Password</label>
                    <input id="password" type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-info" type='submit'>Submit</button>
                </div>
            </form>
        </div>
 );
};

export default Registro;