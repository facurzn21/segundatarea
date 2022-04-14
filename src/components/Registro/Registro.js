import React, {  useState } from 'react';
import classes from './Registro.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Registro = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [valor, setearValor] = useState(valorInicial);

    const navigate = useNavigate();
    //evito cargar cosas antes que se renderizen
    const submitHandler = (event) => {  // Manejo de Registro cuando se envia formulario
        try { 
            
            event.preventDefault();
            const url = 'http://localhost:3000/api/user/signup';
            const data = { email: email, password: password};
            axios.post(url, data)
                .then((res) => {  
                    console.log(res);
                    navigate("/");   // Si el registro queda bien, se navega en la pagina de inicio 
                }).catch(err => alert(err));
            } catch (error) {
                alert(error);   
            }
        
    };
    const emailHandler = (event) => { // se guarda lo que se escribe en el campo email
        setEmail(event.target.value);
    };
    const passHandler = (event) => {  // se guarda lo que se escribe en el campo contraseña
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
                    <button className="btn btn-info" type='submit'>Registrarse</button>
                </div>
            </form>
        </div>
 );
};

export default Registro;