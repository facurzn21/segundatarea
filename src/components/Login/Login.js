import React,{ useState} from 'react';
import classes from './Login.module.css';
import axios from 'axios';
import { Route, useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
   
    const navigate = useNavigate();
    //const [valor, setearValor] = useState(valorInicial);

    
    //evito cargar cosas antes que se renderizen
    const submitHandler = (event) => {  // Manejo de Login cuando se envia formulario
        try {
            
            event.preventDefault();
            const url = 'http://localhost:3000/api/user/login';
            const data = { email: email, password: password};
            axios.post(url, data)
                .then((res) => { 
                    console.log(res.data);
                    const token = res.data.token; // se devuelve json web token
                    setToken(token);
                    if(token) {
                        navigate("/");
                    }
                    console.log(res);
                }).catch(err => alert(err));
            } catch (error) {
                alert(error);   
            }
        
    };
    const emailHandler = (event) => { // se guarda lo que se escribe en el campo email
        setEmail(event.target.value);
    };
    const passHandler = (event) => {// se guarda lo que se escribe en el campo contraseña 
        setPassword(event.target.value);

    };

    return (
        <div className={classes.container}>
            <form onSubmit={submitHandler}>
                <h1>Inciar Sesion</h1>
                <div className="form-group">
                    <label>Email</label>
                    < input id="email" type="email" className="form-control" onChange={emailHandler}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" onChange={passHandler}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-info" type='submit'>Inciar Sesion</button>
                </div>
            </form>
        </div>
 );
};

export default Login;