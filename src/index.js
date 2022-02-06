import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  // Agrego tag BrowserRouter para que funcionen las rutas 
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

