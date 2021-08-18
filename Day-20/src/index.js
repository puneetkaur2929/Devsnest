import React from 'react';
import ReactDom from 'react-dom';
import App from './components/index';
import './style.css'
ReactDom.render(
   <div className="cont">
    <h1>Calorie Chart</h1>
    <App />
   </div>,
    document.getElementById('root')

)