import React from 'react';
import ReactDOM from 'react-dom';
// iportar css en javaScript 
import "./estilos/index.css";
import reportWebVitals from './reportWebVitals';

// componentes
import Header from "./componentes/Header"
import Galeria from "./componentes/Galeria"

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Galeria />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
