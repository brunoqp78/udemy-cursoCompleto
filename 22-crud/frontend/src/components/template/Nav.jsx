import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* <a href="#/" */}
            {/* aqui que chamará o router. Usar o Link para trabalhar com router */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>