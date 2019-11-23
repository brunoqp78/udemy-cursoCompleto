// externos
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import React from 'react'
// gerencia o roteamento das páginas na main
import { BrowserRouter } from 'react-router-dom'

// importar todos os componentes que existirão nesse app
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props =>
    // gerencia as páginas
    <BrowserRouter>
        <div className="app">
            {/* referencia aos componentes */}
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>