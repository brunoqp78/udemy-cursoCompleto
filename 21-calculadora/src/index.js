import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // ele usou a div para mais de um componente
    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>
, document.getElementById('root'));
registerServiceWorker();

