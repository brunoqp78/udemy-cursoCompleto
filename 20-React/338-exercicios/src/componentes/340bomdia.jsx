import React, {Fragment} from 'react'

//export default () => <h1>Bom Dia!!!!</h1>

//receber propriedades, define uma variavel de propriedades, que será tipo um objeto. se nome e idade
//props.nome e props.idade
//export default props => <h1>Bom Dia, {props.nome}!!!!</h1>

//retornar duas tags
export default props => 
    <Fragment>
        <h1>Bom Dia, {props.nome}!!!!</h1>
        <h2>Até breve....</h2>
    </Fragment>

    //inseriu o Fragment no import {Fragment}
    //melhor usar React.Fragment do que Div, pois Div muda o layout. mas o mais comum é usar Div mesmo

    //outra opção é inserir em um array, mas deve criar uma key para cada elemento
    // export default props => [
    //     <h1 key='h1'>Bom Dia, {props.nome}!!!!</h1>,
    //     <h2 key='h2'>Até breve....</h2>
    // ]
