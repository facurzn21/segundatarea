import React from 'react';
import classes from './Login.module.css';


const Login = () => {
    return (
       /*
        <div className={classes.formContainer}>
            
            <div className={classes.form}>
                <div className={classes.titulo}>
                <p>Login</p>
                    <div>           
                        <input type="email" placeholder="Digita Tu Correo Electronico" id="email" name="email" aria-label="Usuario" />
                        <input type="password" placeholder="Digita Tu Contraseña" id="pass" name="pass" aria-label="Password" />
                        <button >Enviar</button>
                                                    
                    </div>
                </div>
            </div>
        </div>
        */
    <div className={classes.container}>
        <div className="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" />
      </div>
      <div className="form-group">
      <label for="password">Password</label>
      <input id="password" type="password" class="form-control" />
    </div>
    <div className="form-group">
    <button className="btn btn-info">Submit</button>
  </div>

    </div>
 );
};

export default Login;