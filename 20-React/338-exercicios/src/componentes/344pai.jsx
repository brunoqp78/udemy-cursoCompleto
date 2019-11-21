import React from 'react'
import Filho from './344filho'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Pedro" sobrenome={props.sobrenome} />
            {/* recebe todas as propriedades */}
            <Filho {...props} /> 
            <Filho {...props} nome = "Carla" />
        </ul>
    </div>