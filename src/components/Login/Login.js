import React,{ useState} from 'react';
import classes from './Login.module.css';
import axios from 'axios';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [estaAutenticado, setEstaAutenticado] = useState(false);
    const [userId, setUserId] = useState('');
    const [tokenTimer, setTokenTimer] = useState(0);
    //const [valor, setearValor] = useState(valorInicial);

    const setAuthTimer =(duration) =>{
        setTokenTimer(() => setTimeout(() => {
                //logout;
        }, duration * 1000));
    }
    //evito cargar cosas antes que se renderizen
    const submitHandler = (event) => {
        try {
            
            event.preventDefault();
            const url = 'http://localhost:3000/api/user/login';
            const data = { email: email, password: password};
            // axios.post<{token: string, expiraEn: number, userId: string}>(url, data)
            //     .then((res) => { 
            //         const token = res.token;
            //         setToken(token);
            //         if(token) {
            //             const expiraEn = res.expiraEn;
            //             setAuthTimer(expiraEn);
            //             setUserId(res.userId);
                        
            //         }
            //         console.log(res);
            //     }).catch(err => alert(err));
            axios.post(url, data)
                .then((res) => { 
                    const token = res.token;
                    setToken(token);
                    console.log(res.message);
                    if(token) {
                        window.location('http://localhost:3001/home');
                    }
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
                    <button className="btn btn-info" type='submit'>Submit</button>
                </div>
            </form>
        </div>
 );
};

export default Login;