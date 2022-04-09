import React from 'react';
import classes from './Login.module.css';


const Login = () => {
    return (
      
        <div className={classes.container}>
            <h1>Inciar Sesion</h1>
            <div className="form-group">
                <label for="email">Email</label>
                < input id="email" type="email" class="form-control" />
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